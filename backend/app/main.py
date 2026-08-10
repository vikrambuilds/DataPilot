from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="DataPilot API",
    description="AI-powered Data Science Workspace API",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=[""],
    allow_headers=[""],
)

@app.get("/api/health")
def health_check():
    return {"status": "ok", "service": "datapilot-api"}

@app.get("/api")
def api_root():
    return {
        "name": "DataPilot API",
        "version": "0.1.0",
        "status": "development",
}