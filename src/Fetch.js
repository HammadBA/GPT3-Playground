let API_KEY = process.env.REACT_APP_API_KEY;

// Function calls on GPT3 API and returns the output response
export async function FetchCall(query, engine, key) {
  if (key !== "") {
    API_KEY = key;
  }
  const settings = {
    prompt: query,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  const engines = {
    Curie: "text-curie-001",
    Davinci: "text-davinci-002",
    Babbage: "text-babbage-001",
    Ada: "text-ada-001",
  };

  const res = await fetch(
    "https://api.openai.com/v1/engines/" + engines[engine] + "/completions",
    {
      method: "POST",
      headers: {
        ContentType: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify(settings),
    }
  );
  const data = await res.json();
  if (data.error) {
    alert("Error: Too Many API Calls, Quota Limit Exceeded");
  }
  console.log(data);
  return data.choices[0].text;
}
