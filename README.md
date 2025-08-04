# 📈 Brent Oil Price Event Impact Analysis

This project explores how major global events such as geopolitical conflicts, OPEC decisions, and economic shocks impact Brent crude oil prices. The goal is to help investors, analysts, and policymakers better understand price movements and their underlying drivers.

---

## Objective

- To identify key events that have significantly impacted Brent oil prices over the past decade.
- To measure the extent of their influence on price changes using time series analysis.
- To provide actionable, data-driven insights for investment strategy, policy, and planning.

---

## Methodology (So Far)

1. **Data Loading**  
   - Loaded daily Brent oil prices from May 20, 1987 to September 30, 2022.
   - Parsed and cleaned date formats using `format='mixed'`.

2. **Initial Data Exploration**  
   - Plotted historical price trends.
   - Calculated rolling statistics (mean, volatility).
   - Checked for missing values and structural changes over time.

3. **Planning for Event Analysis**  
   - Outlined a 10-step workflow for linking global events to oil price changes.
   - Started compiling a list of ~15 key geopolitical and economic events.

4. **Next Steps**  
   - Conduct stationarity testing (ADF Test).
   - Perform change point detection to identify structural breaks.
   - Overlay and statistically compare event impacts on price changes.

---

## 🛠️ Tools & Technologies

| Tool | Purpose |
|------|---------|
| **Python** | Main language for analysis |
| **Pandas** | Data loading, cleaning, and manipulation |
| **Matplotlib / Seaborn** | Visualization |
| **Jupyter / Colab** | Interactive analysis |
| *(Planned)* Ruptures | Structural break detection |
| *(Planned)* Statsmodels | ADF test and time series diagnostics |

---

## Data

- **Brent Crude Oil Prices**  
  - Source: Historical dataset (1987–2022)  
  - Fields: `Date`, `Price (USD/barrel)`

- **Global Events Dataset (in progress)**  
  - Fields: `Event Name`, `Start Date`, `Type`, `Region`, `Notes`

---

## Project Status

✔️ Data loaded and cleaned  
✔️ Basic exploration and trend analysis completed  


---

