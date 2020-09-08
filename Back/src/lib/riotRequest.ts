// const axios = require('axios-promise-native');
import axios from 'axios';
const { RIOT_URL } = require('../config/riotapi.json');
const { DDRAGON_URL } = require('../config/riotapi.json');
const { DEVELOPER_URL } = require('../config/riotapi.json');
const { API_KEY } = require('../config/riotapi.json');
const VERSION = '10.16.1';

const getRotation = async () => {
  const { data } = await axios.get(
    `${RIOT_URL}/platform/v3/champion-rotations?api_key=${API_KEY}`
  );
  return data;
};

const getChampion = async () => {
  const { data } = await axios.get(
    `${DDRAGON_URL}/${VERSION}/data/ko_KR/champion.json`
  );
  return data;
};

const searchSummonerName = async (name) => {
  const { data } = await axios.get(
    `${RIOT_URL}/summoner/v4/summoners/by-name/${encodeURI(
      name
    )}?api_key=${API_KEY}`
  );
  return data;
};

const searchMatchList = async (accountId, begin, end) => {
  try {
    const { data } = await axios.get(
      `${RIOT_URL}/match/v4/matchlists/by-account/${encodeURI(
        accountId
      )}?endIndex=${end}&beginIndex=${begin}&api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    return error;
  }
};
const getSummonerTier = async (summonerName) => {
  try {
    const { data } = await axios.get(
      `${RIOT_URL}/league/v4/entries/by-summoner/${summonerName}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    return error.response;
  }
};
const searchMatch = async (matchId) => {
  console.log(matchId);
  try {
    const { data } = await axios.get(
      `${RIOT_URL}/match/v4/matches/${matchId}?api_key=${API_KEY}`
    );
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

const getQueue = async () => {
  try {
    const { data } = await axios.get(`${DEVELOPER_URL}/lol/queues.json`);
    return data;
  } catch (error) {
    return error;
  }
};

const getSpell = async () => {
  try {
    const { data } = await axios.get(
      `${DDRAGON_URL}/${VERSION}/data/ko_KR/summoner.json`
    );
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getRotation: getRotation,
  getChampion: getChampion,
  searchSummonerName: searchSummonerName,
  searchMatchList: searchMatchList,
  searchMatch: searchMatch,
  getQueue: getQueue,
  getSpell: getSpell,
  getSummonerTier: getSummonerTier,
};
