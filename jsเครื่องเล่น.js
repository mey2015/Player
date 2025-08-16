
    var thumbnail_width = 300;
    var seek_thumbnail_config = {
      //   enabled: true,
      pic_num: 1371, // total thumbnail numbers
      width: thumbnail_width, // per thumbnail item width
      height: thumbnail_width * 9 / 16, // default height
      col: 6, // per thumbnail image columns
      row: 6, // per thumbnail image rows
      offsetX: 0,
      offsetY: 0,
      /*  urls: [
            'https://ใส่ลิงค์วีดีโอช่วงเวลาแต่ละวินาที.jpg',
        ] */
    }
function getSeekThumbnailHeight(imgWidth, imgHeight) {
    var aspectRatio = imgWidth / imgHeight;
    return Math.floor(thumbnail_width / aspectRatio);
}
var prevShowImage = null;
function setSeekThumbnailHeight(player) {
    if (prevShowImage || !player || !player.thumbnails)
        return;
    prevShowImage = player.thumbnails.showImage;
    player.thumbnails.showImage = function (previewImage, qualityIndex, thumbNum, thumbFilename, newImage) {
        if (previewImage.width > 0 && previewImage.height > 0)
            player.config.thumbnail.height = getSeekThumbnailHeight(previewImage.width, previewImage.height);
        prevShowImage.call(player.thumbnails, previewImage, qualityIndex, thumbNum, thumbFilename, newImage);
    }
}
var video_start_time = 0;
function setPlayerStartingPosition(player) {
    if (video_start_time > 0) {
        player.on('loadeddata', function (event) {
            var instance = event.detail.plyr;
            if (video_start_time <= instance.duration) {
                instance.off('loadeddata', event);
                instance.currentTime = video_start_time;
            }
        });
    }
}   
      	var errorEvents = {};
          function loadUrl(url, onFinished) {
      			var xmlhttp = new XMLHttpRequest();
      			xmlhttp.onreadystatechange = function () {
      				if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
      					if (xmlhttp.status == 200) {
      						onFinished(xmlhttp.responseText);
      					}
      				}
      			};
      			xmlhttp.open("GET", url, true);
      			xmlhttp.send();
      		}
      		function IsMobile() {
      			var check = false;
      			(function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
      			return check;
      		}
        var levelsInternal = [];
        function getLabel(hlsLevelInfo) {
            var height = hlsLevelInfo.height;
            var width = hlsLevelInfo.width;
            var isVertical = false;


            if (height > width) {
                // vertical video
                var temp = width;
                width = height;
                height = temp;
                isVertical = true;
            }


            switch (height) {
				case 2160:
				case 1440:
                case 1080:
                case 720:
                case 480:
                case 360:
                case 240:
                    return height;
            }


            switch (width) {
				case 3840:
					return 2160;
				case 2560:
					return 1440;
                case 1920:
                    return 1080;
                case 1280:
                    return 720;
                case 852:
                case 854:
                case 856:
                    return 480;
                case 640:
                    return 360;
                case 426:
                case 428:
                    return 240;
            }


            var url = hlsLevelInfo.url[0];
            var splitted = url.split('/');
            var resolution = splitted[splitted.length - 2];


            if (resolution.indexOf('p') > -1) {
				var match = resolution.match(/\d+p/g);
				if (match && match.length > 0) {
					return +match[0].replace('p', '');
				}
            }


            if (resolution.indexOf('x') > -1) {
                splitted = resolution.split('x');
                if (isVertical) {
                    return +splitted[0];
                }


                return +splitted[1];
            }


            return 0;
        }
    document.addEventListener("DOMContentLoaded", async function() {
      var video = document.querySelector("video");
      var fragmentsLoaded = 0;
      var player = null;
      var isFairplay = false;
      var useFairplayInternalEngine = false;
      var useFairplayHlsJs = false;
      var isEntDrm = false;
      var playOriginal = false;
      var originalUrl = '???';
      var urlPlaylistUrl = 'm3u8';
      var isHlsSupported = (!isFairplay || useFairplayHlsJs) && Hls.isSupported();
      var source = video.getElementsByTagName("source")[0].src;
      var isAdPaused = false;
      var prioritizeSegmentHttpResponseCode = 600;
      var prioritizeSegmentProbingInterval = 0;
      var isAirplayEnabled = true;
      var is4KVideo = true;
      var defaultOptions = {
        storage: {
          enabled: true,
          key: ''
        },
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        iconUrl: 'https://assets.mediadelivery.net/plyr/3.7.3.2/plyr.svg',
        captions: { active: false, language: '', update: true },
        controls: [
          "play-large", "play", "rewind", "fast-forward", "progress", "current-time", "duration", "mute", "volume", /*"captions",*/ "settings", "pip","airplay", "fullscreen","audioTrack" /*,"chromecast" */
        ],
        settings: ['captions', 'quality', 'speed', 'loop', 'audioTrack'],
        speed: {
          speed: { selected: 1, options: [0.5,0.75,1,1.25,1.5,1.75,2,4] },
        },
        i18n: {
          restart: 'รีสตาร์ท',
          rewind: 'ย้อนกลับ {seektime}วินาที',
          play: 'เล่น',
          pause: 'หยุดชั่วคราว',
          fastForward: 'ไปข้างหน้า {seektime}วินาที',
          seek: 'ค้นหา',
          seekLabel: '{currentTime} จาก {duration}',
          played: 'เล่นแล้ว',
          buffered: 'บัฟเฟอร์',
          currentTime: 'เวลาปัจจุบัน',
          duration: 'ระยะเวลา',
          volume: 'ความดังเสียง',
          mute: 'ปิดเสียง',
          unmute: 'เปิดเสียง',
          enableCaptions: 'เปิดใช้งานคำบรรยาย',
          disableCaptions: 'ปิดใช้งานคำบรรยาย',
          download: 'ดาวน์โหลด',
          enterFullscreen: 'เข้าสู่โหมดเต็มหน้าจอ',
          exitFullscreen: 'ออกจากโหมดเต็มหน้าจอ',
          frameTitle: 'เครื่องเล่นสำหรับ {title}',
          captions: 'คำบรรยาย',
          settings: 'การตั้งค่า',
          pip: 'PIP',
          menuBack: 'กลับไปที่เมนูก่อนหน้า',
          speed: 'ความเร็ว',
          normal: 'ปกติ',
          quality: 'คุณภาพ',
          loop: 'ลูป',
          start: 'เริ่มต้น',
          end: 'จบ',
          all: 'ทั้งหมด',
          reset: 'รีเซ็ต',
          disabled: 'ปิดใช้งาน',
          enabled: 'เปิดใช้งาน',
          advertisement: 'โฆษณา',
          qualityBadge: {
            2160: '4K',
            1440: 'HD',
            1080: 'HD',
            720: 'HD',
            576: 'SD',
            480: 'SD',
          },
        },
        thumbnail: seek_thumbnail_config,
      };
      function initPlayer() {
       // needed for displaying right direction of the captions
       player.elements.captions.dir = "auto";
        $('<div class="plyr__controls__item hide_mobile plyr__spacer"></div>').insertBefore(".plyr__progress__container");
        player.on('loadeddata', function() {
                    var pjs = new BunnyPlayerJs(player);
                    pjs.init();
                });
                        try {   /*🔴chromecast*/
                            window.bunnyCast = new BunnyCast(player, '');
                            bunnyCast.init({
                              /*  title: "ชื่อเรื่อง",
                                description: "รูปภาพ", */
                                subtitles: []
                            }, urlPlaylistUrl);
                        } catch (error) {
                            console.error("Chromecast not supported: " + error);
                        }
        /* Heatmap Chart */
        $("video").on('webkitbeginfullscreen webkitendfullscreen', function (event) {
          if (event.type === 'webkitbeginfullscreen') {
            document.documentElement.style.setProperty('--webkit-text-track-display', 'block');
          } else {
            document.documentElement.style.setProperty('--webkit-text-track-display', 'none');
          }
        });
        /* VAST management */
        document.addEventListener('visibilitychange', function(e) {
          if (!document.hidden && player.ads != null && player.ads.playing) {
            player.ads.manager.resume();
          }
        });
        /* Session tracking */
        player.on("play", function() {
          videoSessionTracker.OnPlay();      					
      	});
        player.on("playing", function () {
        videoSessionTracker.OnPlaying();
        });
      	player.on("pause", function () {
            	videoSessionTracker.OnPause();
       	});
      setInterval(function () {
      videoSessionTracker.OnProgress(player.currentTime);
      }, 900);
      /* VR */
      /* Progress bar */
      var scrubbingPaused = false;
      var isMobile = IsMobile();
      $(".plyr__progress__container input").css("top", "-5px");
      $(".plyr__progress__container progress").css("top", "4px");
      $(".plyr__progress__container progress").css("opacity", "0.01");
      $(".plyr__progress").prepend($('<div class="plyr__pb"></div>'));
      var pb = new PB(".plyr__pb", ".plyr__progress__container input", {
      keyColor: "#ff0000",
      chapters: [ ],
      moments: [ ],
      onScrubbingChange: function(seekTime, offset) {
    	var thumbWidth = $(".plyr__preview-thumb").width();
      var position = Math.max(thumbWidth / 2, offset);
       position = Math.min($(".plyr__controls").width() - $(".plyr__preview-thumb").width() + (thumbWidth / 4), position);
    $(".plyr__preview-thumb").css("left", (position - 5.5) + "px");
      }
      });
        function subscribeAdManagerEvent() {
          if (player.ads != null) {
            Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
              player.ads.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                switch (e.type) {
                  case 'pause':
                    isAdPaused = true;
                    break;
                  case 'complete':
                  case 'allAdsCompleted':
                  case 'userClose':
                  case 'start':
                  case 'resume':
                  case 'loaded':
                    isAdPaused = false;
                    break;
                  case 'click':
                    if (isAdPaused)
                      player.ads.manager.resume();
                    break;
                }
              });
            });
          }
        }
        document.addEventListener('ready', function() {
          setSeekThumbnailHeight(player);
        });
        player.on("loadedmetadata", function() {
          pb.SetDuration(player.duration);
          if (player.ads != null && player.ads.manager == null) {
            if (player.ads.loader != null) {
              player.ads.loader.addEventListener("adsManagerLoaded", function(e) {
                subscribeAdManagerEvent();
              }, false);
            }
          } else {
            subscribeAdManagerEvent();
          }
        });
        setInterval(function() {
          pb.SetCurrentProgress(player.currentTime);
          pb.SetBufferProgress(player.duration * player.buffered);
        }, 16);
        /* Progress bar */
        function getStatusObject() {
          return {
            volume: player.volume,
            muted: player.muted,
            hideControls: player.hideControls,
            speed: player.speed,
            quality: player.quality,
            currentTime: player.currentTime,
            playing: player.playing,
            paused: player.paused,
            stopped: player.stopped,
            ended: player.ended,
            buffered: player.buffered,
            duration: player.duration,
            hasAudio: player.hasAudio,
            loop: player.loop,
            language: player.language,
            ratio: player.ratio,
          };
        }
      		function sendEvent(name) {
      		window.parent.postMessage({
      			channel: "",
      			video: "",
      			event: name,
      			status: getStatusObject(),
      		}, '*');
      			}
      		function wireEvent(name) {
      		player.on(name, function () { sendEvent(name)});
               }
      			function wireUpEvents()
      			{
      		wireEvent("progress");
      		wireEvent("ready");
      		wireEvent("play");
      		wireEvent("pause");
      		wireEvent("timeupdate");
      		wireEvent("seeking");
      		wireEvent("seeked");
      		wireEvent("ended");
      		wireEvent("ratechange");
      		wireEvent("enterfullscreen");
      		wireEvent("exitfullscreen");
      		wireEvent("captionsenabled");
      		wireEvent("captionsdisabled");
      		wireEvent("languagechange");
      		wireEvent("ready");
               }
      		window.onmessage = function(e)
      		{
      		var message = e.data;
      		if (message.command == 'activate')
      		{
      			wireUpEvents();
      		}
      		else if (message.command == 'pause') {
      			player.pause();
      		}
      		else if (message.command == 'play') {
      			player.play();
      		}
      		else if (message.command == 'togglePlay') {
      			if (message.parameter != null)
    				player.togglePlay(message.parameter);
    			else
    				player.togglePlay();
    		}
    		else if (message.command == 'destroy') {
    			player.destroy();
    		}
    		else if (message.command == 'increaseVolume') {
    			if (message.parameter != null)
    				player.increaseVolume(message.parameter);
    			else
    				player.increaseVolume(0.1);
    		}
    		else if (message.command == 'decreaseVolume') {
    			if (message.parameter != null)
    				player.decreaseVolume(message.parameter);
    			else
    				player.decreaseVolume(0.1);
    		}
    		else if (message.command == 'toggleCaptions') {
    			if (message.parameter != null)
    				player.toggleCaptions(message.parameter);
    			else
    				player.toggleCaptions();
    		}
    		else if (message.command == 'toggleControls') {
    			if (message.parameter != null)
    				player.toggleControls(message.parameter);
    			else
    				player.toggleControls();
    		}
    		else if (message.command == 'fullscreen.enter') {
    			player.fullscreen.enter();
    		}
    		else if (message.command == 'fullscreen.exit') {
    			player.fullscreen.exit();
    		}
    		else if (message.command == 'fullscreen.toggle') {
    			player.fullscreen.toggle();
    		}
    		else if (message.command == 'forward') {
    			if (message.parameter != null)
    				player.forward(message.parameter);
    			else
  					player.forward();
  			}
  			else if (message.command == 'rewind') {
  				if (message.parameter != null)
  					player.rewind(message.parameter);
  				else
  					player.rewind();
  			}
  		};
       initPlyrPositionSaver(player, "");
        setPlayerStartingPosition(player);
        }
        function generateDrmRequest(initDataType, initData, keyContext){
            //console.log(initDataType, initData, keyContext);
            return {initDataType:initDataType, initData:initData};
        }
  				if (isHlsSupported) {
  					var premiumProbingVideos = new Map();
  					var hlsConfig = {
  						debug: false,
  						abrEwmaDefaultEstimate: 5000000,
  						minBufferLength: 20,
  							autoStartLoad: true,
                    xhrSetup: function (xhr, url) {                            
  						},
  					};
                if (is4KVideo) {
                    hlsConfig.maxBufferSize = 100 * 1000 * 1000;
                    hlsConfig.maxMaxBufferLength = 120;
                }
                else {
                    hlsConfig.maxBufferLength = 120;
                    hlsConfig.maxMaxBufferLength = 120;
                }
  					var hls = new Hls(hlsConfig);
  					hls.loadSource(source);
  					// From the m3u8 playlist, hls parses the manifest and returns
  					// all available video qualities. This is important, in this approach,
  					// we will have one source on the Plyr player.
  					hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
                    if (data.audioTracks && data.audioTracks.length) {
                     const languageOptions = Array.from(new Set(data.audioTracks.map(a => a.name)));
                     defaultOptions.audioTrack = {
                         options: languageOptions, // array of strings,
                         selected: languageOptions[0],
                             onChange: (e) => {
                                 let index = hls.audioTracks.findLastIndex(x => x.name == e);
                                 if (index < 0)
                                     index = 0;
                                 hls.audioTrack = index;
						if (bunnyCast){
							bunnyCast.audioTrackChanged(index);
						}
                        }, // e is value of the selected label (string)
                        showUnrecognizedLabel: false, // if you want to show 'Unrecognized (en)' (if not ined in i18n) instead of 'en'
                       };
                       hls.audioTrack = 0;
                        }
						// Transform available levels into an array of integers (height values).
						var availableQualities = hls.levels.map(function (l) { var label = getLabel(l); l.label = label; return label; });
						availableQualities.unshift(-1) //prepend -1 (auto) to quality array;
                        function getCodecString(level) {
							var audioCodec = level.audioCodec;
							var codecString = 'video/mp4; codecs="'.concat(level.videoCodec);
							if (audioCodec) {
								codecString += ", ".concat(level.audioCodec, '"');
							} else {
								codecString += '"';
							}
							return codecString;
						}
                        var mediaSourceSupported = false;
                        try {
                            var x = MediaSource;
                            mediaSourceSupported = true;
                        } catch (e) {
                            console.debug('MediaSupport error: ', e);
                        }
						var vp9Levels = hls.levels.filter(function(level) {
							if (!level.codecSet.includes('vp09')) {
								return false;
							}
							var codecString = getCodecString(level);
							return mediaSourceSupported && MediaSource.isTypeSupported(codecString);
						});
						var hevcLevels = hls.levels.filter(function(level) {
							if (!level.codecSet.includes('hvc1')) {
								return false;
							}
							var codecString = getCodecString(level);
							return mediaSourceSupported && MediaSource.isTypeSupported(codecString);
						});
						var av1Levels = hls.levels.filter(function(level) {
							if (!level.codecSet.includes('av01')) {
								return false;
							}
							var codecString = getCodecString(level);
							return mediaSourceSupported && MediaSource.isTypeSupported(codecString);
						});
						levelsInternal = hls.levels;
						if (av1Levels.length > 0) {
							levelsInternal = av1Levels;
							console.debug('playing AV1');
						} else if (hevcLevels.length > 0) {
							levelsInternal = hevcLevels;
							console.debug('playing HEVC');
						} else if (vp9Levels.length > 0) {
							levelsInternal = vp9Levels;
							console.debug('playing VP9');
						} else {
							console.debug('playing x264');
						}
      						if (window.hls.currentLevel == -1)
      						{
      							// Auto
                            if(levelsInternal.length == 1) {
                                window.hls.currentLevel = hls.levels.indexOf(levelsInternal[0]);
      							}
                            else if(levelsInternal.length == 2) {
                                window.hls.currentLevel = hls.levels.indexOf(levelsInternal[1]);
      							}
      							else {
                                window.hls.currentLevel = hls.levels.indexOf(levelsInternal[2]);
      							}
      						}
      						// Add new qualities to option
      						defaultOptions.quality = {
      							default: -1,
      							options: availableQualities,
      							// this ensures Plyr to use Hls to update quality level
      							forced: true,
      							onChange: function (e) { updateQuality(e); },
      						}
                        defaultOptions.i18n["qualityLabel"] = { "-1": "Auto" };


                        // Initialize here
      						player = new Plyr(video, defaultOptions);
      						initPlayer();
      					});
      					hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
      						var span = document.querySelector(".plyr__controls [data-plyr='quality'][value='-1'] span")
      						if (span != null) {
      							if (hls.autoLevelEnabled) {
                                    var level = hls.levels[data.level];
                                    var label = getLabel(level);
                                    level.label = label;
      								span.innerHTML = 'Auto (' + label + 'p)'
      							} else {
      								span.innerHTML = 'Auto'
      							}
      						}
      					});
					var retryCount = 0;
					video.addEventListener('error', function (evt) {
						if (evt && evt.type === 'error') {
							var mediaError = evt.currentTarget.error;
							if (!mediaError) {
								return;
							}
							if (mediaError.code == 3) { // MEDIA_ERR_DECODE
								if (retryCount > 5) {
									return;
								}
								retryCount++;
								console.error("MEDIA_ERR_DECODE");
								var now = self.performance.now();
								if (
									!self.recoverDecodingErrorDate ||
									now - self.recoverDecodingErrorDate > 3000
								) {
									self.recoverDecodingErrorDate = self.performance.now();
									console.warn('trying to recover decode error');
									hls.recoverMediaError();
								} else {
									if (
										!self.recoverSwapAudioCodecDate ||
										now - self.recoverSwapAudioCodecDate > 3000
									) {
										self.recoverSwapAudioCodecDate = self.performance.now();
										console.warn('tryin to swap audio codec if possible and recover again');
										hls.swapAudioCodec();
										hls.recoverMediaError();
									} else {
										console.error('Unable to recover');
										hls.recoverMediaError();
									}
								}
							}
						}
					});
      					hls.on(Hls.Events.ERROR, function (event, data) {
                        if (errorEvents[data.details] == undefined) {
      							errorEvents[data.details] = 0;
      						}
                        console.error("HLS error occured:", data);
      						errorEvents[data.details] += 1;
      						if (data.fatal) {
                            console.error("HLS fatal error occured:", data);
      							switch (data.type) {
      								case Hls.ErrorTypes.NETWORK_ERROR:
      									// try to recover network error
      									console.log('fatal network error encountered, try to recover');
      									hls.startLoad();
      									break;
      								case Hls.ErrorTypes.MEDIA_ERROR:
      									console.log('fatal media error encountered, try to recover');
      									hls.recoverMediaError();
      									break;
      								default:
      									break;
      							}
      						}
      					});
      					setInterval(function() {
      						var bandwidth = hls.abrController.bwEstimator.getEstimate();
      						if (isNaN(bandwidth)) {
      							bandwidth = 0;
      						}
      						if (!video.paused) {


      							var errorEventsString = "";
      							var keys = Object.keys(errorEvents);
      							for (var i = 0; i < keys.length; i++) {
      								var key = keys[i];
                                var value = errorEvents[key];
      								if (errorEventsString != "") {
      									errorEventsString += ",";
      								}
      								errorEventsString += (key + "=" + value);
                            }
                            loadUrl(" " + errorEventsString + "&bandwidth=" + bandwidth + "&zoneTier=" + 'volume', function (data) { });
      							errorEvents = {};
                        }
      					}, 15000);
                    hls.attachMedia(video);
                    if (isAirplayEnabled) {
                        var source = document.createElement('source');
                        source.src = urlPlaylistUrl;
                        video.appendChild(source);
                        video.disableRemotePlayback = false;
                    }
     					window.hls = hls;
      				}
      				else {
      				    // hls not supported
      					defaultOptions.quality = {
      						default: 480,
      						options: [240, 320, 480, 720]
      					};
      					player = new Plyr(video, defaultOptions);
      					initPlayer();
      				}
            function getRoutes(request){
                let routes = new Map();
                var p = new URL(request).pathname.split("/");
                for(var i=1;i<p.length-1;i+=2)
                {
                    routes.set(p[i],p[i+1]);
                }
                return routes;
            }
      			function updateQuality(newQuality) {
                if (newQuality === -1) {
                    window.hls.currentLevel = -1; //Enable AUTO quality if option.value = -1
                } else {
                    for (var level of levelsInternal) {
                        if (level.label === newQuality) {
                            console.log("Found quality match", level);
                            window.hls.currentLevel = hls.levels.indexOf(level);
                            return;
                        }
                    }
                }
      			};
      		});
        var errorElement;
        function showError(message){
            if(!errorElement){
                errorElement = document.createElement("div");
                errorElement.className = "error-message";
                const container = document.getElementById("video-container");
                container.appendChild(errorElement);
            }
            errorElement.innerHTML = message;
        }
        function centerVertically() {
            var container = document.getElementById("body");
            var inner = document.getElementById("video-container");
            var inHeight = inner.offsetHeight;
            var conHeight = container.offsetHeight;
            inner.style.marginTop = ((conHeight - inHeight) / 2) + 'px';
        centerVertically();
      		window.addEventListener("resize", centerVertically);
        }

