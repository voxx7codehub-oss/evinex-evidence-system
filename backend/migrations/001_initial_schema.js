exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('email', 255).unique().notNullable();
      table.string('password_hash', 255).notNullable();
      table.string('first_name', 100).notNullable();
      table.string('last_name', 100).notNullable();
      table.enum('role', ['USER', 'ADMIN', 'LEGAL_OFFICER', 'ADVOCATE']).notNullable().defaultTo('USER');
      table.boolean('is_active').notNullable().defaultTo(true);
      table.timestamps(true, true);
      table.index('email');
      table.index('role');
    })
    .createTable('cases', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('case_number', 50).unique().notNullable();
      table.string('title', 255).notNullable();
      table.text('description');
      table.uuid('created_by').notNullable().references('id').inTable('users').onDelete('RESTRICT');
      table.specificType('assigned_to', 'uuid[]').defaultTo('{}');
      table.enum('status', ['ACTIVE', 'CLOSED', 'PENDING', 'ARCHIVED']).notNullable().defaultTo('ACTIVE');
      table.timestamps(true, true);
      table.index('case_number');
      table.index('created_by');
      table.index('status');
    })
    .createTable('documents', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('case_id').notNullable().references('id').inTable('cases').onDelete('CASCADE');
      table.uuid('uploaded_by').notNullable().references('id').inTable('users').onDelete('RESTRICT');
      table.string('file_name', 255).notNullable();
      table.string('file_path', 500).notNullable();
      table.integer('file_size').notNullable();
      table.string('mime_type', 100).notNullable();
      table.string('sha256_hash', 64).notNullable().unique();
      table.enum('status', ['PENDING_VERIFICATION', 'VERIFIED', 'INTEGRITY_WARNING', 'ARCHIVED']).notNullable().defaultTo('PENDING_VERIFICATION');
      table.jsonb('document_details').defaultTo('{}');
      table.timestamp('verified_at').nullable();
      table.uuid('verified_by').nullable().references('id').inTable('users').onDelete('SET NULL');
      table.timestamps(true, true);
      table.index('case_id');
      table.index('uploaded_by');
      table.index('status');
      table.index('sha256_hash');
    })
    .createTable('audit_logs', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.uuid('user_id').notNullable().references('id').inTable('users').onDelete('RESTRICT');
      table.string('action', 100).notNullable();
      table.string('resource_type', 100).notNullable();
      table.uuid('resource_id').notNullable();
      table.jsonb('details').defaultTo('{}');
      table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
      table.string('ip_address', 50).nullable();
      table.index('user_id');
      table.index('action');
      table.index('resource_type');
      table.index('timestamp');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('audit_logs')
    .dropTableIfExists('documents')
    .dropTableIfExists('cases')
    .dropTableIfExists('users');
};
