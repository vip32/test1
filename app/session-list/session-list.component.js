"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var toolbar_1 = require('@angular2-material/toolbar');
var button_1 = require('@angular2-material/button');
var sidenav_1 = require('@angular2-material/sidenav');
var list_1 = require('@angular2-material/list');
var card_1 = require('@angular2-material/card');
var input_1 = require('@angular2-material/input');
var checkbox_1 = require('@angular2-material/checkbox');
var radio_1 = require('@angular2-material/radio');
var icon_1 = require('@angular2-material/icon');
var session_component_1 = require('../session/session.component');
var SessionListComponent = (function () {
    function SessionListComponent() {
        ///selectedSession = null;
        this.sessions = [
            { id: 1, name: 'Session 1' },
            { id: 2, name: 'Session 2' },
            { id: 3, name: 'Session 3' },
            { id: 4, name: 'Session 4' },
            { id: 5, name: 'Session 5' },
            { id: 6, name: 'Session 6' }
        ];
    }
    SessionListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-session-list',
            templateUrl: 'session-list.component.html',
            styleUrls: ['session-list.component.css'],
            directives: [
                sidenav_1.MD_SIDENAV_DIRECTIVES,
                list_1.MD_LIST_DIRECTIVES,
                card_1.MD_CARD_DIRECTIVES,
                toolbar_1.MdToolbar,
                button_1.MdButton,
                input_1.MdInput,
                checkbox_1.MdCheckbox,
                radio_1.MdRadioGroup,
                radio_1.MdRadioButton,
                icon_1.MdIcon,
                session_component_1.SessionComponent
            ],
            providers: [http_1.HTTP_PROVIDERS, icon_1.MdIconRegistry, radio_1.MdRadioDispatcher]
        }), 
        __metadata('design:paramtypes', [])
    ], SessionListComponent);
    return SessionListComponent;
}());
exports.SessionListComponent = SessionListComponent;
//# sourceMappingURL=session-list.component.js.map