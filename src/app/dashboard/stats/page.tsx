'use client'
 
import axios from 'axios';
import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import styles from './page.module.css';

const Stats = () => {
  const [stats, setStats] = useState({ userCount: 0, waitlistUserCount: 0 }); // Initialize stats using useState

  useEffect(() => {
    const getStatsData = async () => {
      try {
        const res = await axios.get('/api/admin/stats'); // Use a relative URL
        setStats(res.data); // Update the stats state with fetched data
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
 
    getStatsData(); // Call the function inside useEffect to fetch data when the component mounts
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stats</h1>
      <div className={styles.card}>
        <p>Total Users: {stats.userCount} </p>
        <p>Total Waitlist Users: {stats.waitlistUserCount} </p>
      </div>
    </div>
  );
};

export default Stats;