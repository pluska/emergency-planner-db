-- Insert sample users
INSERT INTO users (username, email, password_hash) VALUES
('john_doe', 'john.doe@example.com', '$2a$10$X7H3t5N7t5N7t5N7t5N7tO'),
('jane_smith', 'jane.smith@example.com', '$2a$10$X7H3t5N7t5N7t5N7t5N7tO'),
('bob_wilson', 'bob.wilson@example.com', '$2a$10$X7H3t5N7t5N7t5N7t5N7tO');

-- Insert sample profiles
INSERT INTO profiles (user_id, first_name, last_name, phone_number, address) VALUES
(1, 'John', 'Doe', '+1-555-123-4567', '123 Main St, Anytown, USA'),
(2, 'Jane', 'Smith', '+1-555-987-6543', '456 Oak Ave, Somewhere, USA'),
(3, 'Bob', 'Wilson', '+1-555-555-5555', '789 Pine Rd, Elsewhere, USA');

-- Insert sample emergency plans
INSERT INTO plans (user_id, plan_name, plan_description, emergency_contacts, evacuation_routes, supplies_list) VALUES
(1, 'Home Emergency Plan', 'Primary emergency plan for home',
'[
    {"name": "Local Police", "phone": "911"},
    {"name": "Nearest Hospital", "phone": "+1-555-111-2222"},
    {"name": "Emergency Contact", "phone": "+1-555-333-4444"}
]',
'[
    {"route": "Main Exit", "description": "Front door to street"},
    {"route": "Backup Exit", "description": "Back door to alley"}
]',
'[
    {"item": "First Aid Kit", "quantity": 1},
    {"item": "Water Bottles", "quantity": 6},
    {"item": "Non-perishable Food", "quantity": 3}
]'),

(2, 'Work Emergency Plan', 'Office building evacuation plan',
'[
    {"name": "Building Security", "phone": "+1-555-222-3333"},
    {"name": "HR Department", "phone": "+1-555-444-5555"},
    {"name": "Emergency Services", "phone": "911"}
]',
'[
    {"route": "Main Stairwell", "description": "Floor 5 to ground"},
    {"route": "Emergency Exit", "description": "Fire escape route"}
]',
'[
    {"item": "Emergency Flashlight", "quantity": 1},
    {"item": "Whistle", "quantity": 1},
    {"item": "Emergency Blanket", "quantity": 1}
]'),

(3, 'Family Emergency Plan', 'Comprehensive family emergency plan',
'[
    {"name": "Family Doctor", "phone": "+1-555-666-7777"},
    {"name": "School Emergency", "phone": "+1-555-888-9999"},
    {"name": "Local Fire Department", "phone": "911"}
]',
'[
    {"route": "Primary Meeting Point", "description": "Front yard tree"},
    {"route": "Secondary Meeting Point", "description": "Neighbor''s house"}
]',
'[
    {"item": "Emergency Radio", "quantity": 1},
    {"item": "Medications", "quantity": 1},
    {"item": "Important Documents", "quantity": 1}
]'); 