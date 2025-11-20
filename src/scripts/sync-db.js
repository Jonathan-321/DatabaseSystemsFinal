const sequelize = require('../db/sequelize');
const models = require('../models');

async function syncDatabase() {
  try {
    console.log('Connecting to database...');
    await sequelize.authenticate();
    console.log('Database connection established.');

    console.log('Synchronizing models...');
    await sequelize.sync({ force: true });
    console.log('Models synchronized successfully.');

    // Add UNIQUE constraint on PLANETS.name (already defined in model, but ensuring it's applied)
    // Add CHECK constraint on ENEMIES.threat_level via raw SQL
    console.log('Adding constraints...');
    await sequelize.query(`
      ALTER TABLE ENEMIES
      ADD CONSTRAINT chk_threat_level
      CHECK (threat_level IS NULL OR (threat_level >= 1 AND threat_level <= 10))
    `).catch(err => {
      // Constraint might already exist, that's okay
      if (!err.message.includes('Duplicate')) {
        console.log('Note: Threat level constraint already exists or error:', err.message);
      }
    });

    console.log('Database setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1);
  }
}

syncDatabase();

