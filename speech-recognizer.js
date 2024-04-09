(function ($) {
    $(document).ready(function () {
        //Chrome checking
        var isChromium = window.chrome;
        var winNav = window.navigator;
        var vendorName = winNav.vendor;
        var isOpera = typeof window.opr !== "undefined";
        var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
        let transliterationLanguage = document.querySelector(
            'meta[name="transliteration_lang"]'
        ).content;

        function isBrave() {
            if (window.navigator.brave != undefined) {
                if (window.navigator.brave.isBrave.name == "isBrave") {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        if (
            isChromium !== null &&
            typeof isChromium !== "undefined" &&
            vendorName === "Google Inc." &&
            isOpera === false &&
            isIEedge === false
        ) {
        } else {
            //If not chrome
            $("#start_button")
                .removeClass("btn-success")
                .addClass("btn-secondary")
                .addClass("disabled")
                .prop("disabled", true);
            mic_image.src = "./assets/mic_disabled.svg";
            $("#info")
                .addClass("alert alert-danger alert-dismissible fade show")
                .append(
                    "Voice typing is not supported on your browser. Please try on <a href='https://www.google.com/intl/en_in/chrome/' class='alert-link'>Google Chrome</a> <button type='button' class='btn-close' data-bs-dismiss='alert'></button>"
                );
            $(".main").addClass("main-alert-padding");
            $("#button-voice-typing").click(function () {
                $("#info").addClass("info-animation");
            });
        }
        //Check for brave
        if (isBrave()) {
            $("#start_button")
                .removeClass("btn-success")
                .addClass("btn-secondary")
                .addClass("disabled")
                .prop("disabled", true);
            mic_image.src = "./assets/mic_disabled.svg";
            $("#info")
                .addClass("alert alert-danger alert-dismissible fade show")
                .append(
                    "Voice typing is not supported on your browser. Please try on <a href='https://www.google.com/intl/en_in/chrome/' class='alert-link'>Google Chrome</a> <button type='button' class='btn-close' data-bs-dismiss='alert'></button>"
                );
            $(".main").addClass("main-alert-padding");
            $("#button-voice-typing").click(function () {
                $("#info").addClass("info-animation");
            });
        }

        // For unsupported languages
        if (transliterationLanguage == "or") {
            $("#start_button")
            .removeClass("btn-success")
            .addClass("btn-secondary")
            .addClass("disabled")
            .prop("disabled", true);
            mic_image.src = "./assets/mic_disabled.svg";
        }

        //For Chrome
        try {
            var recognition = new webkitSpeechRecognition();
        } catch (e) {
            var recognition = Object;
        }
        //some variables
        var recognizing = false;
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = transliterationLanguage;
        var start_timestamp;
        var ignore_onend;

        var interimResult = "";
        var textArea = $("#text-area");
        var textAreaID = "text-area";

        ///////////////////////////////Functions////////////////////////////////

        /**
         * @description event-handler for starting voice type
         */

        function startHandler() {
            if (recognizing) {
                recognition.stop();
                recognizing = false;
                $("#start_button")
                    .removeClass("btn-danger")
                    .addClass("btn-success");
                textArea.unbind("keydown", blockKeyPress);
                return;
            }
            startRecognition();
        }

        /**
         * @description starting recognition
         */

        function startRecognition() {
            recognizing = true;
            $("#start_button")
                .addClass("btn-danger")
                .removeClass("btn-success");
            $("#text-state").html("END LISTENING");
            textArea.focus();
            textArea.keydown(blockKeyPress);
            recognition.start();
        }

        /**
         *
         * @param {*} event
         * @description block keydown while voice typing is active
         */

        function blockKeyPress(event) {
            event.preventDefault();
        }

        /**
         * @description spacing for fullstop and coma after voice to text fragments
         */

        function spacingForSpecialCharcters(chara) {
            var curPos = document.getElementById("text-area").selectionStart;
            let x = $("#text-area").val();
            let text_to_insert = chara;
            //element before the cursor position is a 'space'
            if (x[curPos - 1] === " ") {
                var final_text =
                    x.slice(0, curPos - 1) + text_to_insert + x.slice(curPos);
            } else {
                var final_text =
                    x.slice(0, curPos) + text_to_insert + x.slice(curPos);
            }
            $("#text-area").val(final_text);
        }

        /**
         *
         * @param {*} event
         * @description fetch the interims and convert it to the final
         */

        function voiceToText(event) {
            var pos = textArea.getCursorPosition() - interimResult.length;
            textArea.val(textArea.val().replace(interimResult, ""));
            interimResult = "";
            textArea.setCursorPosition(pos);

            for (var i = event.resultIndex; i < event.results.length; ++i) {
                //Final Result
                if (event.results[i].isFinal) {
                    var str = event.results[i][0].transcript + " ";

                    //Replacing words from voice-substitution-rules
                    for (var i = 0; i < replace.length; i++) {
                        str = str.replace(new RegExp(replace[i], "g"), by[i]);
                    }

                    insertAtCaret(textAreaID, str);
                } else {
                    //Interim Result
                    isFinished = false;

                    insertAtCaret(
                        textAreaID,
                        event.results[i][0].transcript + "\u200B"
                    );
                    interimResult += event.results[i][0].transcript + "\u200B";
                }
            }
        }

        /////////////////////////////////////////////////////////////////////////////////

        //Calling the event handler
        $("#start_button").click(startHandler);

        //shortcut for starting voice typing Ctrl + Space
        $(document).keydown(function (event) {
            if (event.keyCode == 32 && event.ctrlKey) {
                startHandler();
                event.preventDefault();
            }
        });

        // let timer = 0;
        // let isSpace = false;

        // $(document).keydown(function (event) {
        //   if (event.keyCode === 32) {
        //     if (isSpace === true) {
        //       if (Date.now() - timer > 500) {
        //         startHandler();
        //       }

        //       event.preventDefault();
        //       return;
        //     }
        //     timer = timer || Date.now();
        //     isSpace = true;
        //   } else {
        //     timer = 0;
        //     isSpace = false;
        //   }
        //   lastKey = event.keyCode;
        // });
        // $(document).keyup(function (event) {
        //   // if (isSpace) {
        //   //   recognition.onend();
        //   // }
        //   timer = 0;
        //   isSpace = false;
        // });

        //automatic spacing for "." "," "?"
        //"."
        $("#text-area").keydown(function (event) {
            if (event.keyCode == 190) {
                event.preventDefault();
                spacingForSpecialCharcters(". ");
            }
        });
        //","
        $("#text-area").keydown(function (event) {
            if (event.keyCode == 188) {
                event.preventDefault();
                spacingForSpecialCharcters(", ");
            }
        });
        //"?"
        $("#text-area").keydown(function (event) {
            if (event.keyCode == 191) {
                event.preventDefault();
                spacingForSpecialCharcters("? ");
            }
        });

        recognition.onerror = function (event) {
            if (event.error == "not-allowed") {
                if (!$(".alert-dismissible")[0]) {
                    if (event.timeStamp - start_timestamp < 100) {
                        $("#info")
                            .addClass(
                                "alert alert-danger alert-dismissible fade show"
                            )
                            .append(
                                "Permission to use microphone is blocked. To change, go to <a href='https://www.google.com/intl/en_in/chrome/' class='alert-link'>Micro phone settings</a> <button type='button' class='btn-close' data-bs-dismiss='alert'></button>"
                            );
                        $(".main").addClass("main-alert-padding");
                    } else {
                        $("#info")
                            .addClass(
                                "alert alert-danger alert-dismissible fade show"
                            )
                            .append(
                                "Permission to use microphone was denied. <button type='button' class='btn-close' data-bs-dismiss='alert'></button> "
                            );
                        $(".main").addClass("main-alert-padding");
                    }
                    ignore_onend = true;
                }
            }
        };

        recognition.onresult = function (event) {
            voiceToText(event);
        };

        recognition.onend = function () {
            $("#start_button")
                .removeClass("btn-danger")
                .addClass("btn-success");
            $("#text-state").html("VOICE TYPING");
            recognizing = false;
            textArea.unbind("keydown", blockKeyPress);
        };
    });
})(jQuery);