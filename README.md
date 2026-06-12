# 1BM130 — The 10-Minute Biking City
## How to run this project

---

## Requirements

### Python version
Python 3.9 or higher recommended.

### Install dependencies
Run this once in your terminal before opening the notebooks:

```bash
pip install pandas numpy matplotlib statsmodels duckdb scikit-learn xgboost shap joblib openpyxl
```

Or with conda:
```bash
conda install pandas numpy matplotlib statsmodels scikit-learn joblib openpyxl
pip install duckdb xgboost shap
```

---

## Folder structure

Set up your project folder like this before running:

```
project/
├── data/
│   ├── buurt_to_buurt.csv (not possible to upload to this repository)
│   ├── kwb2025.xlsx
│   ├── voorzieningen_per_buurt_klasse.csv
│   ├── odin2024_full.csv
│   ├── odin2022_brabant.csv
│   └── ODiN2024_Codeboek_DANS_v2.0 (1).xlsx
├── topic1_final.ipynb
└── topic2_final.ipynb
```

> ⚠️ The notebooks expect the data files to be inside a `data/` subfolder relative to where the notebooks are saved.

---

## Running the notebooks

### Step 1 — Topic 1 (run first)
Open and run **`topic1_final.ipynb`** from top to bottom.

This notebook:
- Loads and cleans the CBS neighbourhood data and amenity data
- Computes the 10-minute bike-shed accessibility scores
- Processes ODiN trip data
- Saves intermediate output files to an `output_topic1/` folder (created automatically)

### Step 2 — Topic 2 (run after Topic 1)
Open and run **`topic2_final.ipynb`** from top to bottom.

This notebook:
- Reads the intermediate files produced by Topic 1
- Trains and evaluates machine learning models (Logistic Regression, Random Forest, XGBoost)
- Generates SHAP feature importance plots
- Saves figures and model files to an `output_topic2/` folder (created automatically)

> ⚠️ **Topic 2 depends on Topic 1 outputs.** Always run Topic 1 first.

### Step 3 — Topic 3
Open the folder **`topic_3`** and read the **`README.md`** from that topic.

---

## How to open and run a notebook

1. Open a terminal in the project folder
2. Run: `jupyter notebook` (or `jupyter lab`)
3. In the browser window that opens, click on the notebook file
4. To run all cells: go to **Kernel → Restart & Run All**

---

## Troubleshooting

| Problem | Solution |
|---|---|
| `ModuleNotFoundError: No module named 'duckdb'` | Run `pip install duckdb` |
| `ModuleNotFoundError: No module named 'xgboost'` | Run `pip install xgboost` |
| `ModuleNotFoundError: No module named 'shap'` | Run `pip install shap` |
| File not found errors | Make sure data files are in the `data/` subfolder |
| Topic 2 crashes on missing files | Run Topic 1 first and make sure it completed without errors |
