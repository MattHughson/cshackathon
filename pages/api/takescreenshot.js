// pages/api/take-screenshot.js

import { takeScreenshot } from '../../utility/screenshot';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Wrap the takeScreenshot call in a Promise
      await new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            await takeScreenshot();
            resolve();
          } catch (error) {
            reject(error);
          }
        }, 5000); // 5000 milliseconds (5 seconds)
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error capturing screenshot:', error);
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
