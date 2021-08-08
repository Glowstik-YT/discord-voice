/**
 * The voice manager options
 * @typedef VoiceManagerOptions
 *
 * @property {string} [userStorage="./users.json"] The storage path for the user's data.
 * @property {string} [configStorage="./configs.json"] The storage path for the config's data.
 * @property {number} [checkMembersEvery=5000] The user data update interval (in ms).
 * @property {Boolean} [default.trackBots=false] Whether bots are able to be tracked.
 * @property {Boolean} [default.trackAllChannels=true] Whether to track all of the guild's voice channels.
 * @property {Function} [default.exemptChannels] Function to filter channels. If true is returned, the channel won't be tracked.
 * @property {Array} [default.channelIDs=[]] The channels to track (if trackAllChannels is true this will be ignored).
 * @property {Discord.PermissionResolvable[]} [default.exemptPermissions=[]] Members with any of these permissions won't be tracked.
 * @property {Function} [default.exemptMembers] Function to filter members. If true is returned, the member won't be tracked.
 * @property {Boolean} [default.trackMute=true] Whether members who are muted should be tracked.
 * @property {Boolean} [default.trackDeaf=true] Whether members who are deafened should be tracked.
 * @property {number} [default.minUserCountToParticipate=0] The min amount of users to be in a channel to be tracked (0 is equal to unlimited).
 * @property {number} [default.maxUserCountToParticipate=0] The max amount of users to be in a channel to be tracked uptil (0 is equal to unlimited).
 * @property {number} [default.minXPToParticipate=0] The min amount of xp the user needs to have to be tracked (0 is equal to none).
 * @property {number} [default.minLevelToParticipate=0] The min amount of level the user needs to have to be tracked (0 is equal to none).
 * @property {number} [default.minLevelToParticipate=0] The min amount of level the user needs to have to be tracked (0 is equal to none).
 * @property {number} [default.maxXPToParticipate=0] The max amount of xp the user can be tracked uptil (0 is equal to none).
 * @property {number} [default.maxLevelToParticipate=0] The max amount of level the user can be tracked uptil (0 is equal to none).
 * @property {Function} [default.xpAmountToAdd] Function for xpAmountToAdd. If not provided, the default value is used (Math.floor(Math.random() * 10) + 1).
 * @property {Function} [default.voiceTimeToAdd] Function for voiceTimeToAdd. If not provided, the default value is used (1000).
 * @property {boolean} [defaul.voiceTimeTrackingEnabled=true] Whether to enable the voice time tracking module.
 * @property {boolean} [default.levelingTrackingEnabled=true] Whether to enable the leveling tracking module.
 */
exports.VoiceManagerOptions = {};

/**
 * Defaults options for the VoiceManager
 * @type {VoiceManagerOptions}
 */
exports.defaultVoiceManagerOptions = {
  userStorage: "./users.json",
  configStorage: "./configs.json",
  checkMembersEvery: 5000,
  default: {
    trackBots: false,
    trackAllChannels: true,
    exemptChannels: () => false,
    channelIDs: [],
    exemptPermissions: [],
    exemptMembers: () => false,
    trackMute: true,
    trackDeaf: true,
    minUserCountToParticipate: 0,
    maxUserCountToParticipate: 0,
    minXPToParticipate: 0,
    minLevelToParticipate: 0,
    maxXPToParticipate: 0,
    maxLevelToParticipate: 0,
    xpAmountToAdd: () => Math.floor(Math.random() * 10) + 1,
    voiceTimeToAdd: () => 1000,
    voiceTimeTrackingEnabled: true,
    levelingTrackingEnabled: true,
  },
};

/**
 * The config data
 * @typedef ConfigData
 *
 * @property {Boolean} [trackBots=false] Whether bots are able to be tracked.
 * @property {Boolean} [trackAllChannels=true] Whether to track all of the guild's voice channels.
 * @property {Function} [exemptChannels] Function to filter channels. If true is returned, the channel won't be tracked.
 * @property {Array} [channelIDs=[]] The channels to track (if trackAllChannels is true this will be ignored).
 * @property {Discord.PermissionResolvable[]} [exemptPermissions=[]] Members with any of these permissions won't be tracked.
 * @property {Function} [exemptMembers] Function to filter members. If true is returned, the member won't be tracked.
 * @property {Boolean} [trackMute=true] Whether members who are muted should be tracked.
 * @property {Boolean} [trackDeaf=true] Whether members who are deafened should be tracked.
 * @property {number} [minUserCountToParticipate=0] The min amount of users to be in a channel to be tracked (0 is equal to unlimited).
 * @property {number} [maxUserCountToParticipate=0] The max amount of users to be in a channel to be tracked uptil (0 is equal to unlimited).
 * @property {number} [minXPToParticipate=0] The min amount of xp the user needs to have to be tracked (0 is equal to none).
 * @property {number} [minLevelToParticipate=0] The min amount of level the user needs to have to be tracked (0 is equal to none).
 * @property {number} [minLevelToParticipate=0] The min amount of level the user needs to have to be tracked (0 is equal to none).
 * @property {number} [maxXPToParticipate=0] The max amount of xp the user can be tracked uptil (0 is equal to none).
 * @property {number} [maxLevelToParticipate=0] The max amount of level the user can be tracked uptil (0 is equal to none).
 * @property {Function} [xpAmountToAdd] Function for xpAmountToAdd. If not provided, the default value is used (Math.floor(Math.random() * 10) + 1).
 * @property {Function} [voiceTimeToAdd] Function for voiceTimeToAdd. If not provided, the default value is used (1000).
 * @property {boolean} [voiceTimeTrackingEnabled=true] Whether to enable the voice time tracking module.
 * @property {boolean} [levelingTrackingEnabled=true] Whether to enable the leveling tracking module.
 */
exports.ConfigData = {};

/**
 * Default data for the Config.
 * @type {ConfigData}
 */
exports.defaultConfigData = {
  trackBots: false,
  trackAllChannels: true,
  exemptChannels: () => false,
  channelIDs: [],
  exemptPermissions: [],
  exemptMembers: () => false,
  trackMute: true,
  trackDeaf: true,
  minUserCountToParticipate: 0,
  maxUserCountToParticipate: 0,
  minXPToParticipate: 0,
  minLevelToParticipate: 0,
  maxXPToParticipate: 0,
  maxLevelToParticipate: 0,
  xpAmountToAdd: () => Math.floor(Math.random() * 10) + 1,
  voiceTimeToAdd: () => 1000,
  voiceTimeTrackingEnabled: true,
  levelingTrackingEnabled: true,
};

/**
 * The user data
 * @typedef UserData
 *
 * @property {Array} [voiceTime.channels=[]] The user's voice time in the channels.
 * @property {Number} [voiceTime.total=0] The user's total voice time.
 * @property {Number} [levelingData.xp=0] The user's xp.
 * @property {Number} [levelingData.level=0] The user's level.
 */
exports.UserData = {};

/**
 * The user voice time data
 * @typedef UserVoiceTimeData
 *
 * @property {Array} [channels=[]] The user's voice time in the channels.
 * @property {Number} [total=0] The user's total voice time.
 */
exports.UserVoiceTimeData = {};

/**
 * The user voice time data
 * @typedef UserLevelingData
 *
 * @property {Number} [levelingData.xp=0] The user's xp.
 * @property {Number} [levelingData.level=0] The user's level.
 */
exports.UserLevelingData = {};

/**
 * Default data for the user.
 * @type {UserData}
 */
exports.defaultUserData = {
  voiceTime: {
    channels: [],
    total: 0,
  },
  levelingData: {
    xp: 0,
    level: 0,
  },
};
