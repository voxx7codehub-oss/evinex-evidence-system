exports.seed = function(knex) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        {
          email: 'user@example.com',
          password_hash: '$2b$10$YourHashedPasswordHere', // Change this with actual bcrypt hash
          first_name: 'John',
          last_name: 'User',
          role: 'USER',
          is_active: true
        },
        {
          email: 'admin@example.com',
          password_hash: '$2b$10$YourHashedPasswordHere', // Change this with actual bcrypt hash
          first_name: 'Admin',
          last_name: 'User',
          role: 'ADMIN',
          is_active: true
        },
        {
          email: 'legal@example.com',
          password_hash: '$2b$10$YourHashedPasswordHere', // Change this with actual bcrypt hash
          first_name: 'Legal',
          last_name: 'Officer',
          role: 'LEGAL_OFFICER',
          is_active: true
        },
        {
          email: 'advocate@example.com',
          password_hash: '$2b$10$YourHashedPasswordHere', // Change this with actual bcrypt hash
          first_name: 'Advocate',
          last_name: 'Pro',
          role: 'ADVOCATE',
          is_active: true
        }
      ]);
    });
};
