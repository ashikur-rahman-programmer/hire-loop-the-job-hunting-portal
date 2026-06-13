import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const baseUrl = process.env.SERVER_URL;

export const serverFetch = async (path) => {
  try {
    const res = await fetch(`${baseUrl}${path}`);

    // ১. রেসপন্স স্ট্যাটাস চেক করা (401, 403, 404 ইত্যাদি হ্যান্ডেল করা)
    if (!res.ok) {
      console.error(`API Error: ${res.status} for path ${path}`);
      return null; // এরর হলে null রিটার্ন করুন যাতে অ্যাপ ক্রাশ না করে
    }

    // ২. রেসপন্সটি টেক্সট হিসেবে নিন
    const text = await res.text();

    // ৩. টেক্সট খালি কি না চেক করুন
    if (!text || text.trim() === "") {
      return null;
    }

    // ৪. এবার নিরাপদে JSON পার্স করুন
    return JSON.parse(text);
  } catch (error) {
    console.error("Fetch failed:", error);
    return null; // নেটওয়ার্ক এরর হলেও অ্যাপ সচল থাকবে
  }
};

export const serverMutation = async (path, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // handle 401, 404, 403

  return res.json();
};
