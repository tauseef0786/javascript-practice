import requests

class CodexHelper:
    def __init__(self, api_key):
        self.api_key = api_key
        self.api_url = "https://api.openai.com/v1"

    def suggest_code(self, code_snippet):
        try:
            response = requests.post(
                f"{self.api_url}/completions",
                headers={"Authorization": f"Bearer {self.api_key}",
                         "Content-Type": "application/json"},
                json={
                    "model": "code-davinci-002",  # Adjust model as needed
                    "prompt": f"Write the next line of code for the following code snippet:\n{code_snippet}",
                    "max_tokens": 100,
                    "temperature": 0.7
                }
            )
            response.raise_for_status()
            return response.json()["choices"][0]["text"].strip()
        except requests.exceptions.RequestException as e:
            return {"error": str(e)}

    def debug_code(self, code_snippet):
        try:
            response = requests.post(
                f"{self.api_url}/completions",
                headers={"Authorization": f"Bearer {self.api_key}",
                         "Content-Type": "application/json"},
                json={
                    "model": "code-davinci-002",
                    "prompt": f"Debug the following code snippet:\n{code_snippet}\nIdentify and fix any errors.",
                    "max_tokens": 150,
                    "temperature": 0.7
                }
            )
            response.raise_for_status()
            return response.json()["choices"][0]["text"].strip()
        except requests.exceptions.RequestException as e:
            return {"error": str(e)}

    def get_tips(self, code_snippet):
        try:
            response = requests.post(
                f"{self.api_url}/completions",
                headers={"Authorization": f"Bearer {self.api_key}",
                         "Content-Type": "application/json"},
                json={
                    "model": "code-davinci-002",
                    "prompt": f"Provide tips to improve the following code snippet:\n{code_snippet}",
                    "max_tokens": 150,
                    "temperature": 0.7
                }
            )
            response.raise_for_status()
            return response.json()["choices"][0]["text"].strip()
        except requests.exceptions.RequestException as e:
            return {"error": str(e)}
 