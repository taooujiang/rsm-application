import * as React from 'react';
import Notification from 'rc-notification';
import {Icon} from 'antd';
var defaultDuration = 3;
var defaultTop = void 0;
var messageInstance = void 0;
var key = 1;
var prefixCls = 'ant-message';
var getContainer = void 0;
function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    Notification.newInstance({
        prefixCls: prefixCls,
        transitionName: 'move-up',
        style: { top: defaultTop },
        getContainer: getContainer
    }, function (instance) {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}
function notice(content) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    var type = arguments[2];
    var onClose = arguments[3];
    var closable= arguments[4];
    var iconType = {
        info: 'info-circle',
        success: 'check-circle',
        error: 'cross-circle',
        warning: 'exclamation-circle',
        loading: 'loading'
    }[type];
    if (typeof duration === 'function') {
        onClose = duration;
        duration = defaultDuration;
    }
    var target = key++;
    getMessageInstance(function (instance) {
        instance.notice({
            key: target,
            duration: duration,
            style: {},
            closable:true,
            content: React.createElement(
                'div',
                { className: prefixCls + '-custom-content ' + prefixCls + '-' + type },
                React.createElement(Icon, { type: iconType }),
                React.createElement(
                    'span',
                    null,
                    content
                )
            ),
            onClose: onClose
        });
    });
    return function () {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
}
export default {
    info: function info(content, duration, onClose,closable) {
        return notice(content, duration, 'info', onClose,closable);
    },
    success: function success(content, duration, onClose,closable) {
        return notice(content, duration, 'success', onClose,closable);
    },
    error: function error(content, duration, onClose,closable) {
        return notice(content, duration, 'error', onClose,closable);
    },

    // Departed usage, please use warning()
    warn: function warn(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose,closable);
    },
    warning: function warning(content, duration, onClose,closable) {
        return notice(content, duration, 'warning', onClose,closable);
    },
    loading: function loading(content, duration, onClose,closable) {
        return notice(content, duration, 'loading', onClose,closable);
    },
    config: function config(options) {
        if (options.top !== undefined) {
            defaultTop = options.top;
            messageInstance = null; // delete messageInstance for new defaultTop
        }
        if (options.duration !== undefined) {
            defaultDuration = options.duration;
        }
        if (options.prefixCls !== undefined) {
            prefixCls = options.prefixCls;
        }
        if (options.getContainer !== undefined) {
            getContainer = options.getContainer;
        }
    },
    destroy: function destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    }
};
