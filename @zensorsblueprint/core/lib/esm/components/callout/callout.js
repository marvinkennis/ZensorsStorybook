/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import { Classes, Intent } from "../../common";
import { Icon } from "../../index";
var Callout = /** @class */ (function (_super) {
    tslib_1.__extends(Callout, _super);
    function Callout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Callout.prototype.render = function () {
        var _a = this.props, className = _a.className, children = _a.children, _nospread = _a.icon, intent = _a.intent, title = _a.title, htmlProps = tslib_1.__rest(_a, ["className", "children", "icon", "intent", "title"]);
        var iconName = this.getIconName();
        var classes = classNames(Classes.CALLOUT, Classes.intentClass(intent), (_b = {}, _b[Classes.CALLOUT_ICON] = iconName != null, _b), className);
        return (React.createElement("div", tslib_1.__assign({ className: classes }, htmlProps),
            iconName && React.createElement(Icon, { icon: iconName, iconSize: Icon.SIZE_LARGE }),
            title && React.createElement("h4", { className: Classes.CALLOUT_TITLE }, title),
            children));
        var _b;
    };
    Callout.prototype.getIconName = function () {
        var _a = this.props, icon = _a.icon, intent = _a.intent;
        // 1. no icon
        if (icon === null) {
            return undefined;
        }
        // 2. defined iconName prop
        if (icon !== undefined) {
            return icon;
        }
        // 3. default intent icon
        switch (intent) {
            case Intent.DANGER:
                return "error";
            case Intent.PRIMARY:
                return "info-sign";
            case Intent.WARNING:
                return "warning-sign";
            case Intent.SUCCESS:
                return "tick";
            default:
                return undefined;
        }
    };
    return Callout;
}(React.PureComponent));
export { Callout };
