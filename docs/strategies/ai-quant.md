# AI + 量化交易

## 🤖 策略模型

- 基于 MA、MACD 的趋势判断
- 使用 AI 回测结果优化策略

## 🧩 使用工具

- Python + ccxt 库连接交易所
- Pandas / Numpy 数据分析
- Tensorflow / PyTorch 做预测模型

## 📌 示例

```python
import ccxt
exchange = ccxt.binance()
btc = exchange.fetch_ticker('BTC/USDT')
print(btc['last'])
