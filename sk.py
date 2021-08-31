import re
import matplotlib.pyplot as plt
from mpl_finance import candlestick_ohlc
import pandas as pd
import matplotlib.dates as mpl_dates
import mpl_finance as mfp


plt.style.use('ggplot')


data = pd.read_csv("C:/Users/priya/Desktop/New folder/VS code/StockList.csv")

ohlc = data.loc[:, ['date', 'open', 'high', 'low', 'close']]
ohlc['date'] = pd.to_datetime(ohlc['date'])
ohlc['date'] = ohlc['date'].apply(mpl_dates.date2num)
ohlc = ohlc.astype(float)


fig, ax = plt.subplots()
#data.head()

candlestick_ohlc(ax, ohlc.values, width=0.6, colorup='green', colordown='red', alpha=0.8)


ax.set_xlabel('date')
ax.set_ylabel('price')
fig.suptitle('Daily Candlestick Chart of NIFTY50')


date_format = mpl_dates.DateFormatter('%d-%m-%Y')
ax.xaxis.set_major_formatter(date_format)
fig.autofmt_xdate()

fig.tight_layout()

plt.show()

mfp.plot(data, type = 'line', volume = False)
plt.show()