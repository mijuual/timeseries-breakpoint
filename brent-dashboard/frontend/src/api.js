// src/api.js
import axios from 'axios';

const API_BASE = "http://localhost:5000/api";

export const fetchOilPrices = () => axios.get(`${API_BASE}/oil-prices`);
export const fetchChangePoints = () => axios.get(`${API_BASE}/change-points`);
export const fetchEvents = () => axios.get(`${API_BASE}/events`);
