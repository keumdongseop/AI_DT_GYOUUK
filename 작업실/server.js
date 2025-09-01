import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 5000;

app.use(express.json());

const db = new sqlite3.Database('./작업실/bookings.db');
// ====================

// 1. 예약 목록 가져오기


// 2. 새 예약 만들기


// ====================
app.listen(port, () => {
  console.log(`✅ 서버가 시작되었습니다: http://localhost:${port}`);
});