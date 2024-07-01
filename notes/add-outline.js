/**
 * 添加 outline 到当前所有文件夹下 md 文件内容的头部
 */
const fs = require('fs');
const path = require('path');

// 定义需要添加的 YAML 头部信息
const frontmatter = "---\noutline: deep\n---\n\n";

// 获取当前脚本所在目录的路径
const currentDir = __dirname;

// 递归遍历目录并处理 .md 文件
function processFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}: ${err}`);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error stating file ${filePath}: ${err}`);
          return;
        }

        if (stats.isDirectory()) {
          // 递归处理子目录
          processFiles(filePath);
        } else if (stats.isFile() && file.endsWith('.md')) {
          // 处理 .md 文件
          prependFrontmatter(filePath);
        }
      });
    });
  });
}

// 在文件开头添加 YAML 头部信息
function prependFrontmatter(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return;
    }

    // 检查文件内容是否已经有 YAML 头部信息，避免重复添加
    if (!data.startsWith("---")) {
      // 在文件开头添加 YAML 头部信息
      const newData = frontmatter + data;

      // 写入更新后的文件内容
      fs.writeFile(filePath, newData, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing to file ${filePath}: ${err}`);
        } else {
          console.log(`Added YAML frontmatter to ${filePath}`);
        }
      });
    }
  });
}

// 启动递归处理，从当前目录开始
processFiles(currentDir);
