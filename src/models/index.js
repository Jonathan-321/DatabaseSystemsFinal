const Actor = require('./Actor');
const Writer = require('./Writer');
const Director = require('./Director');
const Season = require('./Season');
const Episode = require('./Episode');
const Doctor = require('./Doctor');
const Companion = require('./Companion');
const Character = require('./Character');
const Tardis = require('./Tardis');
const Planet = require('./Planet');
const Enemy = require('./Enemy');
const Species = require('./Species');
const DoctorCompanion = require('./DoctorCompanion');
const EpisodeAppearance = require('./EpisodeAppearance');
const EpisodeLocation = require('./EpisodeLocation');
const EnemyEpisode = require('./EnemyEpisode');

// ACTORS relationships
Actor.hasMany(Doctor, { foreignKey: 'actor_id', as: 'doctors' });
Actor.hasMany(Companion, { foreignKey: 'actor_id', as: 'companions' });

// WRITERS relationships
Writer.hasMany(Season, { foreignKey: 'showrunner_id', as: 'seasons' });
Writer.hasMany(Episode, { foreignKey: 'writer_id', as: 'episodes' });

// DIRECTORS relationships
Director.hasMany(Episode, { foreignKey: 'director_id', as: 'episodes' });

// SEASONS relationships
Season.hasMany(Episode, { foreignKey: 'season_id', as: 'episodes' });

// EPISODES relationships
Episode.belongsTo(Season, { foreignKey: 'season_id', as: 'season' });
Episode.belongsTo(Writer, { foreignKey: 'writer_id', as: 'writer' });
Episode.belongsTo(Director, { foreignKey: 'director_id', as: 'director' });
Episode.hasMany(DoctorCompanion, { foreignKey: 'start_episode_id', as: 'doctorCompanionStarts' });
Episode.hasMany(DoctorCompanion, { foreignKey: 'end_episode_id', as: 'doctorCompanionEnds' });
Episode.hasMany(EpisodeAppearance, { foreignKey: 'episode_id', as: 'appearances' });
Episode.hasMany(EpisodeLocation, { foreignKey: 'episode_id', as: 'locations' });
Episode.hasMany(EnemyEpisode, { foreignKey: 'episode_id', as: 'enemyEpisodes' });

// DOCTOR relationships
Doctor.belongsTo(Actor, { foreignKey: 'actor_id', as: 'actor' });
Doctor.belongsTo(Episode, { foreignKey: 'first_episode_id', as: 'firstEpisode' });
Doctor.belongsTo(Episode, { foreignKey: 'last_episode_id', as: 'lastEpisode' });
Doctor.hasOne(Tardis, { foreignKey: 'owner_doctor_id', as: 'tardis' });
Doctor.hasMany(Character, { foreignKey: 'doctor_id', as: 'characters' });
Doctor.belongsToMany(Companion, {
  through: DoctorCompanion,
  foreignKey: 'doctor_id',
  otherKey: 'companion_id',
  as: 'companions'
});

// COMPANIONS relationships
Companion.belongsTo(Actor, { foreignKey: 'actor_id', as: 'actor' });
Companion.belongsTo(Episode, { foreignKey: 'first_episode_id', as: 'firstEpisode' });
Companion.belongsTo(Episode, { foreignKey: 'last_episode_id', as: 'lastEpisode' });
Companion.belongsTo(Species, { foreignKey: 'species_id', as: 'species' });
Companion.belongsTo(Planet, { foreignKey: 'home_planet_id', as: 'homePlanet' });
Companion.belongsToMany(Doctor, {
  through: DoctorCompanion,
  foreignKey: 'companion_id',
  otherKey: 'doctor_id',
  as: 'doctors'
});

// CHARACTER relationships
Character.belongsTo(Species, { foreignKey: 'species_id', as: 'species' });
Character.belongsTo(Doctor, { foreignKey: 'doctor_id', as: 'doctor' });
Character.belongsTo(Enemy, { foreignKey: 'enemy_id', as: 'enemy' });
Character.belongsToMany(Episode, {
  through: EpisodeAppearance,
  foreignKey: 'character_id',
  otherKey: 'episode_id',
  as: 'episodes'
});

// TARDIS relationships
Tardis.belongsTo(Doctor, { foreignKey: 'owner_doctor_id', as: 'owner' });

// PLANETS relationships
Planet.hasMany(Species, { foreignKey: 'home_planet_id', as: 'species' });
Planet.hasMany(Enemy, { foreignKey: 'home_planet_id', as: 'enemies' });
Planet.hasMany(Companion, { foreignKey: 'home_planet_id', as: 'companions' });
Planet.belongsToMany(Episode, {
  through: EpisodeLocation,
  foreignKey: 'planet_id',
  otherKey: 'episode_id',
  as: 'episodes'
});

// ENEMIES relationships
Enemy.belongsTo(Planet, { foreignKey: 'home_planet_id', as: 'homePlanet' });
Enemy.belongsTo(Species, { foreignKey: 'species_id', as: 'species' });
Enemy.hasMany(Character, { foreignKey: 'enemy_id', as: 'characters' });
Enemy.belongsToMany(Episode, {
  through: EnemyEpisode,
  foreignKey: 'enemy_id',
  otherKey: 'episode_id',
  as: 'episodes'
});

// SPECIES relationships
Species.belongsTo(Planet, { foreignKey: 'home_planet_id', as: 'homePlanet' });
Species.hasMany(Companion, { foreignKey: 'species_id', as: 'companions' });
Species.hasMany(Enemy, { foreignKey: 'species_id', as: 'enemies' });
Species.hasMany(Character, { foreignKey: 'species_id', as: 'characters' });

// Junction table relationships
DoctorCompanion.belongsTo(Doctor, { foreignKey: 'doctor_id', as: 'doctor' });
DoctorCompanion.belongsTo(Companion, { foreignKey: 'companion_id', as: 'companion' });
DoctorCompanion.belongsTo(Episode, { foreignKey: 'start_episode_id', as: 'startEpisode' });
DoctorCompanion.belongsTo(Episode, { foreignKey: 'end_episode_id', as: 'endEpisode' });

EpisodeAppearance.belongsTo(Episode, { foreignKey: 'episode_id', as: 'episode' });
EpisodeAppearance.belongsTo(Character, { foreignKey: 'character_id', as: 'character' });

EpisodeLocation.belongsTo(Episode, { foreignKey: 'episode_id', as: 'episode' });
EpisodeLocation.belongsTo(Planet, { foreignKey: 'planet_id', as: 'planet' });

EnemyEpisode.belongsTo(Enemy, { foreignKey: 'enemy_id', as: 'enemy' });
EnemyEpisode.belongsTo(Episode, { foreignKey: 'episode_id', as: 'episode' });

module.exports = {
  Actor,
  Writer,
  Director,
  Season,
  Episode,
  Doctor,
  Companion,
  Character,
  Tardis,
  Planet,
  Enemy,
  Species,
  DoctorCompanion,
  EpisodeAppearance,
  EpisodeLocation,
  EnemyEpisode
};

