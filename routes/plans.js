const express = require('express');
const router = express.Router();
const { pool } = require('../db');

// Get all plans
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM plans');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get plan by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM plans WHERE plan_id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get plans by user_id
router.get('/user/:user_id', async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await pool.query('SELECT * FROM plans WHERE user_id = $1', [user_id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new plan
router.post('/', async (req, res) => {
  try {
    const { user_id, plan_name, plan_description, emergency_contacts, evacuation_routes, supplies_list } = req.body;
    const result = await pool.query(
      'INSERT INTO plans (user_id, plan_name, plan_description, emergency_contacts, evacuation_routes, supplies_list) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [user_id, plan_name, plan_description, emergency_contacts, evacuation_routes, supplies_list]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update plan
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { plan_name, plan_description, emergency_contacts, evacuation_routes, supplies_list } = req.body;
    const result = await pool.query(
      'UPDATE plans SET plan_name = $1, plan_description = $2, emergency_contacts = $3, evacuation_routes = $4, supplies_list = $5 WHERE plan_id = $6 RETURNING *',
      [plan_name, plan_description, emergency_contacts, evacuation_routes, supplies_list, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete plan
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM plans WHERE plan_id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Plan not found' });
    }
    res.json({ message: 'Plan deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router; 