module.exports = {

	"appenders": [
		{
			"type": "console",
			"category": "console"
		},

		{
			"category": "logDebug",
			"type": "file",	  // 日志文件类型
			"filename": "./logs/files/logDebug.txt",
			"maxLogSize": 20480,
			"backups": 100
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
		"file": "INFO"
	}

};
