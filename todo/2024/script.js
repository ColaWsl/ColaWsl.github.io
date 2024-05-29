const fs = require('fs');
const path = require('path');
const moment = require('moment'); // 使用moment.js库来格式化月份名称

function generateTimelineForMonth() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 注意：getMonth() 返回的月份是从0开始的
  const monthName = moment.monthsShort(month - 1); // 使用moment.js获取月份名称
  const monthStr = (month < 10) ? `0${month}` : `${month}`;
  const text = '记录日常琐碎'

  let output = `# ${year}年${monthStr}月时间线\n\n`;
  output += `:boom:${text}:boom:\n`;


  // 创建该月份的第一天和最后一天的Date对象
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0); // 注意：这里月份+1是为了获取下一个月的第一天，然后减一天得到本月的最后一天


  // 遍历每一天
  for (let day = lastDay.getDate(); day >= 1; day--) {
    // 格式化日期（如果月份或日期小于10，则前面补0）
    const dayStr = day.toString().padStart(2, '0');

    output += `::: timeline 📅${dayStr}/${monthStr}/${year}\n`;
    for (let i = 0; i < 3; i++) {
      output += `- test timeline\n`;
    }
    output += `:::\n\n`;
  }

  return output;
}

// 调用函数并保存文件
function saveTimelineToFile() {
  const timelineContent = generateTimelineForMonth();
  const monthName = moment().format('MMM'); // 使用moment.js获取当前月份的英文缩写
  const filePath = path.join(__dirname, `${monthName}.md`); // 生成文件路径

  // 检查文件是否存在
  fs.promises.access(filePath, fs.constants.F_OK)
    .then(() => {
      console.error(`File ${filePath} already exists.`);
    })
    .catch(() => {
      // 文件不存在，可以安全写入
      fs.writeFile(filePath, timelineContent, (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log(`Timeline saved to ${filePath}`);
        }
      });
    });
}

// 执行保存文件的函数
saveTimelineToFile();
