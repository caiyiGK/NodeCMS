module.exports = {

	"appenders": [
		{
			"type": "console",
			"category": "console"
		},

		{
			"category": "logDebug",
			"type": "file",	  // 日志文件类型
			"filename": "./logs/files/logDebug.txt",  // 日志文件存储路径
			"maxLogSize": 20480,		// 日志文件大小
			"backups": 100  		// 备份日志文件数量
		},
		{
			"category": "logInfo",
			"type": "file",
			"filename": "./logs/files/logInfo.txt",
			"maxLogSize": 20480,
			"backups": 100
		},
		{
			"category": "logWarn",
			"type": "file",
			"filename": "./logs/files/logWarn.txt",
			"maxLogSize": 20480,
			"backups": 100
		},
		{
			"category": "logErr",
			"type": "file",
			"filename": "./logs/files/logErr.txt",
			"maxLogSize": 20480,
			"backups": 100
		}
	],

	"replaceConsole": false,
	// 日志输出级别  级别： ALL TRACE DEBUG INFO WARN ERROR FATAL OFF
	"leveles": {
		"file": "ALL",
	}

};
