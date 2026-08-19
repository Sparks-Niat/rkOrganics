async function verifyLive() {
  console.log("Checking live Vercel deployment categories connection...\n");
  const host = 'https://rk-organics-nine.vercel.app';
  
  for (let i = 1; i <= 10; i++) {
    console.log(`[Attempt ${i}/10] Fetching: ${host}/api/categories ...`);
    try {
      const res = await fetch(`${host}/api/categories`);
      const data = await res.json();
      
      if (res.status === 200 && Array.isArray(data) && data.length > 0) {
        console.log(`\n🎉 SUCCESS! Categories are live in production!`);
        console.log(`Fetched ${data.length} categories.`);
        data.forEach(c => console.log(` - ${c.englishName} (${c.teluguName})`));
        return;
      } else {
        console.log(` -> Response status: ${res.status}, body type: ${typeof data}`);
      }
    } catch (err) {
      console.log(` -> Request failed: ${err.message}`);
    }
    
    // Wait 15 seconds before retrying
    if (i < 10) {
      console.log("Waiting 15 seconds before retrying...\n");
      await new Promise(r => setTimeout(r, 15000));
    }
  }
  console.log("\n❌ Timeout waiting for Vercel categories deployment.");
}

verifyLive();
