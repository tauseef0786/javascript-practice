import streamlit as st
from gemini_helper import GeminiHelper

# Initialize the Gemini Helper with your API key
gemini_api_key = "AIzaSyDYK55sXBZddmiwIKntKM0ZNLCUsxcwQ2o"  # Replace with your actual Gemini API key
helper = GeminiHelper(gemini_api_key)

st.title("AI-Powered Coding Assistant")

# Text area for code input
code_input = st.text_area("Enter your code here:")

if st.button("Suggest Code"):
    suggestions = helper.suggest_code(code_input)
    if "error" in suggestions:
        st.error(f"Error: {suggestions['error']}")
    else:
        st.write("**Suggestions:**")
        st.write(suggestions)

if st.button("Debug Code"):
    debug_info = helper.debug_code(code_input)
    if "error" in debug_info:
        st.error(f"Error: {debug_info['error']}")
    else:
        st.write("**Debug Information:**")
        st.write(debug_info)

if st.button("Get Tips"):
    tips = helper.get_tips(code_input)
    if "error" in tips:
        st.error(f"Error: {tips['error']}")
    else:
        st.write("**Tips:**")
        st.write(tips)
