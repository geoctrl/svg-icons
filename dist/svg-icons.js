/* commonjs package manager support */
'use strict';

if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
    module.exports = 'svg-icons';
}

(function (window, angular) {

    angular.module('svg-icons', []).provider('svgIconProvider', function svgIconProvider() {
        var _this = this;

        var defaults = {
            baseClass: 'icon'
        };

        var options = undefined;

        function setOpts(obj) {
            options = angular.extend(defaults, obj);
        }

        function getOpts() {
            return angular.isObject(options) ? options : defaults;
        }

        angular.extend(this, {
            setOpts: setOpts,
            getOpts: getOpts,
            $get: function $get() {
                return _this;
            }
        });
    }).service('svgIconService', function svgIconService() {
        var icons = {"add-circle-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13 7h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></svg>","add-circle":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM17 13h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z\"></path></svg>","add":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6h-6v-2h6v-6h2v6h6v2z\"></path></svg>","apps":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 8h4v-4h-4v4zM10 20h4v-4h-4v4zM4 20h4v-4h-4v4zM4 14h4v-4h-4v4zM10 14h4v-4h-4v4zM16 4v4h4v-4h-4zM10 8h4v-4h-4v4zM16 14h4v-4h-4v4zM16 20h4v-4h-4v4z\"></path></svg>","arrow-back":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11h-12.17l5.585-5.585-1.415-1.415-8 8 8 8 1.415-1.415-5.585-5.585h12.17v-2z\"></path></svg>","arrow-down":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"-287 189 24 24\" style=\"enable-background:new -287 189 24 24;\" xml:space=\"preserve\"><path class=\"st0\" d=\"M-276,193v12.2l-5.6-5.6l-1.4,1.4l8,8l8-8l-1.4-1.4l-5.6,5.6V193C-274,193-276,193-276,193z\"/></svg>","arrow-drop-down":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"></path></svg>","arrow-drop-up":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"></path></svg>","arrow-forward":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.415 1.415 5.585 5.585h-12.17v2h12.17l-5.585 5.585 1.415 1.415 8-8z\"></path></svg>","arrow-up":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"-287 189 24 24\" style=\"enable-background:new -287 189 24 24;\" xml:space=\"preserve\"><path class=\"st0\" d=\"M-274,209v-12.2l5.6,5.6l1.4-1.4l-8-8l-8,8l1.4,1.4l5.6-5.6V209C-276,209-274,209-274,209z\"/></svg>","book":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 2h-12c-1.105 0-2 0.895-2 2v16c0 1.105 0.895 2 2 2h12c1.105 0 2-0.895 2-2v-16c0-1.105-0.895-2-2-2zM6 4h5v8l-2.5-1.5-2.5 1.5v-8z\"></path></svg>","bookmark-outline-plus":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17,18V5H7V18L12,15.82L17,18M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z\" /></svg>","bookmark-remove":"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17,3A2,2 0 0,1 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M8.17,8.58L10.59,11L8.17,13.41L9.59,14.83L12,12.41L14.41,14.83L15.83,13.41L13.41,11L15.83,8.58L14.41,7.17L12,9.58L9.59,7.17L8.17,8.58Z\" /></svg>","check-box-outline-blank":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14h-14v-14h14zM19 3h-14c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h14c1.1 0 2-0.9 2-2v-14c0-1.1-0.9-2-2-2z\"></path></svg>","check-box":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-14c-1.11 0-2 0.9-2 2v14c0 1.1 0.89 2 2 2h14c1.11 0 2-0.9 2-2v-14c0-1.1-0.89-2-2-2zM10 17l-5-5 1.41-1.41 3.59 3.58 7.59-7.59 1.41 1.42-9 9z\"></path></svg>","check":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 16.17l-4.17-4.17-1.415 1.415 5.585 5.585 12-12-1.415-1.415z\"></path></svg>","chevron-left":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.415 7.415l-1.415-1.415-6 6 6 6 1.415-1.415-4.585-4.585z\"></path></svg>","chevron-right":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6l-1.415 1.415 4.585 4.585-4.585 4.585 1.415 1.415 6-6z\"></path></svg>","close":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.415l-1.415-1.415-5.585 5.585-5.585-5.585-1.415 1.415 5.585 5.585-5.585 5.585 1.415 1.415 5.585-5.585 5.585 5.585 1.415-1.415-5.585-5.585z\"></path></svg>","delete":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19c0 1.105 0.895 2 2 2h8c1.105 0 2-0.895 2-2v-12h-12v12zM19 4h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z\"></path></svg>","do-not-disturb":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.42 0-8-3.58-8-8 0-1.85 0.635-3.545 1.685-4.9l11.215 11.215c-1.355 1.050-3.050 1.685-4.9 1.685zM18.315 16.9l-11.215-11.215c1.355-1.050 3.050-1.685 4.9-1.685 4.42 0 8 3.58 8 8 0 1.85-0.635 3.545-1.685 4.9z\"></path></svg>","done":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 16.17l-4.17-4.17-1.415 1.415 5.585 5.585 12-12-1.415-1.415z\"></path></svg>","edit":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 17.25v3.75h3.75l11.065-11.065-3.75-3.75-11.065 11.065zM20.705 7.045c0.39-0.39 0.39-1.025 0-1.415l-2.335-2.335c-0.39-0.39-1.025-0.39-1.415 0l-1.83 1.83 3.75 3.75 1.83-1.83z\"></path></svg>","email":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 4h-16c-1.105 0-1.99 0.895-1.99 2l-0.010 12c0 1.105 0.895 2 2 2h16c1.105 0 2-0.895 2-2v-12c0-1.105-0.895-2-2-2zM20 8l-8 5-8-5v-2l8 5 8-5v2z\"></path></svg>","error":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.52 0-10 4.475-10 10s4.48 10 10 10 10-4.475 10-10-4.48-10-10-10zM13 17h-2v-2h2v2zM13 13h-2v-6h2v6z\"></path></svg>","file-image":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><path style=\"fill:#404040;\" d=\"M13,9h5.5L13,3.5V9 M6,2h8l6,6v12c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V4C4,2.9,4.9,2,6,2 M6,20h9h3 v-8l-4,4l-2-2L6,20 M8,9c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,9,8,9z\"/></svg>","file":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M14 2h-8c-1.105 0-1.99 0.895-1.99 2l-0.010 16c0 1.105 0.885 2 1.99 2h12.010c1.105 0 2-0.895 2-2v-12l-6-6zM16 18h-8v-2h8v2zM16 14h-8v-2h8v2zM13 9v-5.5l5.5 5.5h-5.5z\"></path></svg>","grid-on":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 2h-16c-1.105 0-2 0.895-2 2v16c0 1.105 0.895 2 2 2h16c1.105 0 2-0.895 2-2v-16c0-1.105-0.895-2-2-2zM8 20h-4v-4h4v4zM8 14h-4v-4h4v4zM8 8h-4v-4h4v4zM14 20h-4v-4h4v4zM14 14h-4v-4h4v4zM14 8h-4v-4h4v4zM20 20h-4v-4h4v4zM20 14h-4v-4h4v4zM20 8h-4v-4h4v4z\"></path></svg>","help":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM13 19h-2v-2h2v2zM15.065 11.255l-0.895 0.92c-0.72 0.72-1.17 1.325-1.17 2.825h-2v-0.5c0-1.105 0.45-2.105 1.17-2.83l1.245-1.26c0.36-0.36 0.585-0.86 0.585-1.41 0-1.105-0.895-2-2-2s-2 0.895-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 0.88-0.355 1.675-0.935 2.255z\"></path></svg>","image":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><path d=\"M20,5c1.1,0,2,0.9,2,2v10c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2H20 M5,16h14l-4.5-6L11,14.5l-2.5-3L5,16z\" /></svg>","info-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11 17h2v-6h-2v6zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2v-2h-2v2z\"></path></svg>","info":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM13 17h-2v-6h2v6zM13 9h-2v-2h2v2z\"></path></svg>","list":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 13h2v-2h-2v2zM3 17h2v-2h-2v2zM3 9h2v-2h-2v2zM7 13h14v-2h-14v2zM7 17h14v-2h-14v2zM7 7v2h14v-2h-14z\"></path></svg>","menu":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2h-18v2zM3 13h18v-2h-18v2zM3 6v2h18v-2h-18z\"></path></svg>","more-horiz":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM18 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z\"></path></svg>","more-vert":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.105 0 2-0.895 2-2s-0.895-2-2-2-2 0.895-2 2 0.895 2 2 2zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2zM12 16c-1.105 0-2 0.895-2 2s0.895 2 2 2 2-0.895 2-2-0.895-2-2-2z\"></path></svg>","notifications":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.5 22c1.105 0 2-0.895 2-2h-4c0 1.105 0.895 2 2 2zM18 16v-5.5c0-3.075-2.135-5.64-5-6.32v-0.68c0-0.83-0.67-1.5-1.5-1.5s-1.5 0.67-1.5 1.5v0.68c-2.865 0.68-5 3.245-5 6.32v5.5l-2 2v1h17v-1l-2-2z\"></path></svg>","pause":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M6 19h4v-14h-4v14zM14 5v14h4v-14h-4z\"></path></svg>","people":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16 11c1.655 0 2.99-1.345 2.99-3s-1.335-3-2.99-3c-1.655 0-3 1.345-3 3s1.345 3 3 3zM8 11c1.655 0 2.99-1.345 2.99-3s-1.335-3-2.99-3c-1.655 0-3 1.345-3 3s1.345 3 3 3zM8 13c-2.335 0-7 1.17-7 3.5v2.5h14v-2.5c0-2.33-4.665-3.5-7-3.5zM16 13c-0.29 0-0.615 0.020-0.965 0.055 1.16 0.835 1.965 1.96 1.965 3.445v2.5h6v-2.5c0-2.33-4.665-3.5-7-3.5z\"></path></svg>","platform-3ds":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g id=\"JGdANQ.tif\"> <g> <path d=\"M8.9,12c0-0.8,0-1.7,0-2.5c0-0.2,0-0.2,0.2-0.2c1.2,0,2.3,0,3.5,0c0.7,0,1.3,0.1,2,0.3c0.6,0.2,1.1,0.6,1.4,1.2 c0.2,0.3,0.3,0.7,0.3,1.1c0,0.3,0,0.6-0.1,0.9c-0.1,0.4-0.4,0.8-0.7,1.1c-0.6,0.5-1.3,0.7-2.1,0.8c-0.6,0.1-1.2,0.1-1.8,0.1 c-0.8,0-1.7,0-2.5,0c-0.2,0-0.2,0-0.2-0.2C8.9,13.7,8.9,12.9,8.9,12z M10.8,12c0,0.6,0,1.2,0,1.8c0,0.2,0,0.2,0.2,0.2 c0.5,0,0.9,0,1.4,0c0.3,0,0.7-0.1,1-0.2c0.3-0.1,0.5-0.3,0.7-0.5c0.4-0.5,0.5-1,0.4-1.5c-0.1-0.6-0.5-1.1-1-1.3 c-0.5-0.2-0.9-0.3-1.5-0.3c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1 C10.8,10.8,10.8,11.4,10.8,12z\"/> <path d=\"M6.9,11.7c0.4,0.1,0.7,0.2,1,0.5c0.2,0.1,0.3,0.3,0.4,0.5c0.2,0.4,0.1,0.8-0.2,1.2c-0.3,0.3-0.6,0.4-0.9,0.6 c-0.5,0.2-1,0.3-1.5,0.3c-0.5,0-1.1,0-1.6,0c-0.6,0-1.2-0.1-1.8-0.2c-0.2,0-0.2,0-0.2-0.2c0-0.2,0-0.4,0-0.6c0-0.2,0-0.2,0.2-0.1 c0.2,0.1,0.5,0.1,0.7,0.2C3.4,13.9,3.8,14,4.3,14c0.4,0,0.7,0,1.1-0.1c0.3-0.1,0.6-0.2,0.8-0.3c0.3-0.2,0.4-0.7,0-0.9 c-0.2-0.1-0.4-0.2-0.6-0.3c-0.3-0.1-0.7-0.1-1-0.1c-0.4,0-0.9,0-1.3,0c-0.2,0-0.2,0-0.2-0.2c0-0.1,0-0.3,0-0.4 c0-0.2,0-0.2,0.2-0.2c0.3,0,0.7,0,1,0c0.4,0,0.8-0.1,1.2-0.2c0.2,0,0.3-0.1,0.5-0.2C6,11,6.1,11,6.1,11c0.2-0.3,0.1-0.5-0.2-0.7 c-0.2-0.1-0.3-0.2-0.5-0.2C5,10,4.7,9.9,4.3,10c-0.6,0-1.2,0.1-1.8,0.3c-0.1,0-0.1,0-0.2,0c-0.1,0-0.2,0-0.2-0.1 c0-0.2,0-0.4,0-0.6c0-0.1,0-0.1,0.1-0.2c0.1,0,0.3-0.1,0.5-0.1c0.3,0,0.6-0.1,0.9-0.1c0.5,0,1,0,1.5,0c0.7,0,1.3,0.1,2,0.3 c0.3,0.1,0.6,0.2,0.8,0.4c0.3,0.2,0.4,0.7,0.2,1c-0.1,0.3-0.3,0.4-0.6,0.6C7.3,11.6,7.1,11.7,6.9,11.7z\"/> <path d=\"M18.7,14.8c-0.7,0-1.4,0-2.1-0.2c-0.2,0-0.2,0-0.2-0.2c0-0.2,0-0.4,0-0.6c0-0.1,0-0.2,0.2-0.1c0.5,0.2,1.1,0.2,1.7,0.3 c0.2,0,0.5,0,0.7,0c0.3,0,0.5-0.1,0.8-0.2c0.1-0.1,0.2-0.2,0.3-0.4c0-0.2,0-0.4-0.2-0.5c-0.2-0.1-0.4-0.2-0.6-0.3 c-0.5-0.2-0.9-0.4-1.4-0.5c-0.4-0.1-0.7-0.3-1-0.5c-0.2-0.1-0.3-0.3-0.4-0.5c-0.2-0.4-0.1-0.9,0.3-1.2c0.4-0.3,0.9-0.5,1.5-0.6 c0.3,0,0.5,0,0.8-0.1c0.4,0,0.8,0,1.2,0c0.3,0,0.6,0.1,0.9,0.1c0.1,0,0.1,0,0.1,0.2c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2-0.2,0.1 c-0.4-0.1-0.7-0.2-1.1-0.2c-0.4-0.1-0.9-0.1-1.3,0c-0.1,0-0.3,0.1-0.4,0.2c-0.2,0.1-0.2,0.4-0.1,0.6c0.2,0.2,0.4,0.3,0.6,0.3 c0.6,0.2,1.1,0.4,1.7,0.6c0.3,0.1,0.7,0.3,0.9,0.5c0.2,0.2,0.4,0.3,0.5,0.6c0.2,0.6-0.1,1.1-0.6,1.4c-0.4,0.2-0.8,0.3-1.2,0.4 c-0.2,0-0.3,0-0.5,0.1C19.3,14.8,19,14.8,18.7,14.8z\"/> </g></g></svg>","platform-linux":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g id=\"XgZ6jG.tif\"> <g> <path style=\"fill:#404040;\" d=\"M11.6,2c0.4,0,0.8,0,1.2,0c1.2,0.3,1.9,1,2.2,2.2c0.2,0.6,0.3,1.2,0.3,1.9c0,1.3,0.3,2.6,1.2,3.6 c0.6,0.8,1.1,1.7,1.6,2.5c0.6,1,0.9,2.2,0.6,3.4c-0.1,0.3,0,0.5,0.1,0.8c0.2,0.2,0.2,0.5,0.2,0.8c0,0.5,0.3,0.8,0.7,1.1 c0.2,0.1,0.5,0.2,0.6,0.5c0,0.2,0,0.4,0,0.5c-0.2,0.3-0.5,0.5-0.8,0.7c-0.7,0.4-1.4,0.7-2.1,1.2c-0.4,0.3-0.8,0.7-1.3,0.9 c-0.3,0-0.6,0-0.9,0c-0.3-0.1-0.5-0.3-0.7-0.5c-0.1-0.2-0.3-0.3-0.6-0.4c-1.3-0.2-2.6-0.2-3.8,0.1c-0.2,0-0.3,0.1-0.4,0.2 C9.5,21.9,9,22,8.5,21.9c-0.3-0.1-0.6-0.1-0.9-0.2c-0.9-0.3-1.9-0.6-2.9-0.8c-0.5-0.1-0.9-0.2-1.2-0.6c0-0.2,0-0.4,0-0.5 c0.2-0.5,0.3-1,0.2-1.5c-0.2-0.8,0-1,0.8-1.2c0.5-0.1,0.9-0.3,1.2-0.7c0.3-0.4,0.6-0.8,0.5-1.3c0-0.2,0.1-0.4,0.2-0.6 c0.1-0.3,0.3-0.7,0.4-1c0.4-1.4,1.1-2.7,2.1-3.8c0.4-0.5,0.6-1,0.6-1.7c0-1.1-0.2-2.2-0.1-3.3c0.1-1.3,0.6-2,1.9-2.4 C11.3,2.1,11.4,2,11.6,2z M9.9,8.4C9.8,9,9.7,9.5,9.4,9.9C9,10.4,8.8,11,8.6,11.6c-0.1,0.4-0.3,0.9-0.5,1.3 c-0.2,0.5-0.4,0.9-0.5,1.4c-0.2,0.9,0.1,1.6,0.8,2.2c0.5,0.3,0.9,0.7,1.3,1.1c0.4,0.4,0.4,0.7,0,1.1c-0.1,0.1-0.1,0.2,0,0.3 c0.3,0.4,0.7,0.8,1.3,0.7c0.2,0,0.4,0,0.6,0c1.2,0,2.2-0.4,3.1-1.3c0.2-0.2,0.3-0.3,0.3-0.6c0-0.5,0.1-1,0.1-1.5 c0-0.3,0.2-0.6,0.5-0.6c0.3,0,0.4-0.1,0.4-0.4c0.1-0.8,0.1-1.6-0.1-2.4c-0.5-1.6-1.2-3.1-1.9-4.6c-0.2-0.3-0.3-0.4-0.6-0.2 c-0.5,0.3-1,0.6-1.6,0.8c-0.4,0.2-0.7,0.2-1-0.1C10.4,8.8,10.1,8.6,9.9,8.4z M8.6,21.2c0.2,0,0.3,0,0.5-0.2 c0.5-0.4,0.6-0.9,0.1-1.5c-0.6-0.8-1.1-1.6-1.6-2.4c-0.1-0.2-0.3-0.4-0.4-0.6c-0.4-0.5-0.7-0.4-1,0.1c-0.2,0.4-0.5,0.7-1,0.7 c-0.1,0-0.3,0.1-0.4,0.1c-0.4,0.1-0.5,0.3-0.4,0.6c0.1,0.4,0,0.8-0.1,1.3c-0.1,0.5-0.1,0.7,0.5,0.7c1,0.2,2,0.4,2.9,0.8 C7.9,21.1,8.3,21.2,8.6,21.2z M15.4,20.3c0,0.3,0.1,0.7,0.4,0.9c0.4,0.2,0.7,0,1-0.2c0.1-0.1,0.3-0.2,0.4-0.3 c0.3-0.3,0.7-0.6,1.1-0.8c0.4-0.2,0.9-0.5,1.3-0.7c0.3-0.2,0.3-0.3,0-0.6c-0.1,0-0.1-0.1-0.2-0.1c-0.4-0.2-0.7-0.6-0.7-1 c0-0.1,0-0.3-0.1-0.4c0-0.2-0.1-0.2-0.2-0.1c-0.1,0.1-0.1,0.1-0.2,0.2c-0.4,0.4-0.9,0.6-1.5,0.5c-0.5-0.1-0.7-0.5-0.7-1 c0,0,0,0,0,0c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.1,0.1-0.1,0.1c0,0.2,0,0.4,0,0.6c0.1,0.5,0,1-0.1,1.5C15.5,19.3,15.4,19.7,15.4,20.3z M11.5,6.7c-0.4,0-0.6,0.2-0.8,0.4c-0.7,0.6-0.7,0.7,0.1,1.2c0.2,0.2,0.4,0.3,0.8,0.2c0.6-0.2,1-0.6,1.6-0.9 c0.2-0.1,0.2-0.3,0-0.4C12.5,7,12,6.9,11.5,6.7z M13.2,6.7c0.6-0.3,0.7-1.4,0.1-1.9c-0.3-0.3-0.8-0.2-1.1,0.1 C12,5.2,11.8,5.6,11.9,6c0,0.1,0.1,0.3,0.2,0.3c0.2,0,0.1-0.2,0.1-0.3c0-0.3,0.2-0.6,0.5-0.6c0.3,0,0.5,0.3,0.5,0.7 C13.3,6.3,13.3,6.5,13.2,6.7z M10.2,6.8C10.1,6.7,10,6.6,9.9,6.4c-0.1-0.3-0.1-0.5,0-0.8c0.1-0.1,0.2-0.2,0.4-0.1 c0.3,0.1,0.3,0.3,0.4,0.6c0,0.1,0,0.2,0.1,0.2c0.1,0,0.2-0.1,0.2-0.2c0-0.4,0-0.7-0.3-1c-0.3-0.3-0.6-0.3-0.8,0 C9.6,5.5,9.5,6.3,9.9,6.7C9.9,6.8,10,6.9,10.2,6.8z\"/> </g></g></svg>","platform-mac":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><path style=\"fill:#404040;\" d=\"M20.1,17.6c-0.3,0.7-0.7,1.3-1.1,1.9c-0.6,0.8-1,1.4-1.4,1.7c-0.6,0.5-1.1,0.8-1.8,0.8 c-0.5,0-1-0.1-1.6-0.4c-0.6-0.3-1.2-0.4-1.8-0.4c-0.6,0-1.2,0.1-1.8,0.4C9.9,21.8,9.4,22,9,22c-0.6,0-1.2-0.2-1.8-0.8 c-0.4-0.3-0.9-0.9-1.4-1.7c-0.6-0.9-1.1-1.9-1.5-3c-0.4-1.2-0.6-2.5-0.6-3.6c0-1.3,0.3-2.5,0.9-3.5c0.5-0.8,1.1-1.4,1.8-1.8 C7,7,7.8,6.8,8.7,6.8c0.5,0,1.1,0.1,1.9,0.4c0.8,0.3,1.3,0.4,1.5,0.4c0.2,0,0.7-0.2,1.7-0.5c0.9-0.3,1.7-0.5,2.3-0.4 c1.7,0.1,2.9,0.8,3.8,2c-1.5,0.9-2.2,2.2-2.2,3.8c0,1.3,0.5,2.3,1.4,3.2c0.4,0.4,0.9,0.7,1.4,0.9C20.3,17,20.2,17.3,20.1,17.6 L20.1,17.6z M16.2,2.4c0,1-0.4,1.9-1.1,2.8c-0.9,1-1.9,1.6-3.1,1.5c0-0.1,0-0.2,0-0.4c0-1,0.4-2,1.2-2.8c0.4-0.4,0.8-0.8,1.4-1.1 C15.1,2.2,15.7,2,16.2,2C16.2,2.1,16.2,2.3,16.2,2.4L16.2,2.4z\"/></svg>","platform-pc":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g> <polyline style=\"fill:#404040;\" points=\"2,4.9 10.2,3.7 10.2,11.6 2,11.6 \"/> <polyline style=\"fill:#404040;\" points=\"11.2,3.6 22,2 22,11.5 11.2,11.5 \"/> <polyline style=\"fill:#404040;\" points=\"2,12.4 10.2,12.4 10.2,20.3 2,19.2 \"/> <polyline style=\"fill:#404040;\" points=\"11.2,12.5 22,12.5 22,22 11.2,20.5 \"/></g></svg>","platform-ps":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><path style=\"fill:#404040;\" d=\"M9.3,11.4c0-2.7,0-5.3,0-8c0,0,0-0.1,0-0.1c1.6,0.4,3.1,0.9,4.7,1.3C14.9,5,15.8,5.4,16.6,6 c1.3,1,1.8,2.3,1.7,3.9c0,0.7-0.1,1.5-0.4,2.1c-0.2,0.6-0.6,1.1-1.3,1.3c-0.6,0.2-1.1,0.1-1.7,0c-0.2-0.1-0.4-0.2-0.7-0.3 c0,0-0.1,0-0.1-0.1c0-1.9,0-3.9,0-5.8c0-0.5-0.4-0.9-0.8-1c-0.3,0-0.5,0.2-0.6,0.5c0,0.3,0,0.5,0,0.8c0,4.2,0,8.4,0,12.7 c0,0.2,0,0.3,0,0.5c0,0,0,0.1-0.1,0c-1.1-0.4-2.3-0.8-3.4-1.2c0,0,0,0,0-0.1c0-1.7,0-3.4,0-5.1C9.3,13.3,9.3,12.4,9.3,11.4 C9.3,11.4,9.3,11.4,9.3,11.4z\"/><path style=\"fill:#404040;\" d=\"M13.5,15.8c0-0.3,0-0.7,0-1c0,0,0-0.1,0.1-0.1c0.7-0.3,1.4-0.4,2.1-0.6c0.9-0.2,1.8-0.2,2.7-0.2 c1.2,0.1,2.4,0.3,3.5,0.8c0.4,0.2,0.7,0.4,1,0.7c0.4,0.5,0.4,0.9-0.1,1.3c-0.5,0.4-1,0.7-1.6,0.9c-2.5,0.9-5,1.8-7.5,2.7 c-0.1,0-0.1,0-0.1-0.1c0-0.7,0-1.3,0-2c0,0,0-0.1,0-0.1c1.7-0.6,3.4-1.2,5.1-1.9c0.3-0.1,0.5-0.2,0.8-0.3c0.1-0.1,0.2-0.1,0.3-0.2 c0.1-0.1,0.1-0.3-0.1-0.4c-0.2-0.1-0.4-0.1-0.6-0.2c-0.7-0.1-1.4,0.1-2,0.3c-1.2,0.4-2.3,0.8-3.4,1.2c-0.1,0-0.1,0-0.1,0 C13.5,16.5,13.5,16.2,13.5,15.8z\"/><path style=\"fill:#404040;\" d=\"M8.6,14.2c0,0.3,0,0.7,0,1c0,0,0,0.1,0,0.1c-1.3,0.5-2.5,1-3.8,1.4c-0.1,0-0.2,0.1-0.3,0.1 c-0.1,0.1-0.1,0.3,0,0.4c0.2,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8,0.1,1.2,0c0.6-0.1,1.1-0.3,1.6-0.5c0.2-0.1,0.4-0.2,0.6-0.2 c0,0,0.1,0,0.1,0c0,0.6,0,1.2,0,1.8c0,0,0,0.1,0,0.1c-0.9,0.2-1.8,0.3-2.8,0.2c-0.7-0.1-1.4-0.2-2.1-0.4c-0.6-0.1-1.2-0.3-1.8-0.6 c-0.2-0.1-0.3-0.2-0.4-0.3c-0.4-0.4-0.4-1,0-1.4c0.3-0.3,0.8-0.5,1.2-0.7c0.9-0.4,1.9-0.7,2.8-1.1c1-0.4,2.1-0.8,3.1-1.1 c0.1,0,0.1,0,0.1,0C8.6,13.5,8.6,13.9,8.6,14.2C8.6,14.2,8.6,14.2,8.6,14.2z\"/></svg>","platform-wii-u":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g id=\"oYWVe3.tif\"> <g> <path d=\"M6.1,11.1c0,0.1,0,0.1,0,0.1c-0.3,1-0.5,1.9-0.8,2.9c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.4-0.4,0.5 c-0.3,0.2-0.7,0.1-1-0.1c-0.2-0.1-0.3-0.3-0.3-0.5c-0.2-0.6-0.3-1.1-0.5-1.7c-0.2-0.6-0.3-1.2-0.5-1.8C2.3,10.3,2.1,9.9,2,9.4 c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.1c0,0,0,0,0,0c0.4,0,0.7,0,1.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0.1 c0.2,0.7,0.3,1.4,0.5,2c0.2,0.6,0.3,1.3,0.5,1.9c0,0,0,0,0,0.1c0,0,0,0,0-0.1c0.1-0.3,0.1-0.6,0.2-0.8c0.2-0.9,0.4-1.7,0.7-2.6 c0-0.1,0.1-0.2,0.2-0.3C5.6,9.4,5.7,9.3,6,9.3c0.2,0,0.3,0,0.5,0.1c0.2,0.1,0.3,0.2,0.3,0.3c0,0.1,0.1,0.2,0.1,0.3 c0.2,0.6,0.3,1.1,0.5,1.7c0.1,0.6,0.3,1.1,0.4,1.7c0,0,0,0,0,0.1c0,0,0-0.1,0-0.1c0.1-0.6,0.3-1.2,0.4-1.7 c0.2-0.7,0.4-1.5,0.6-2.2c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.1c0.1,0,0.2,0,0.3,0c0.2,0,0.5,0,0.7,0c0,0,0,0,0,0c0.1,0,0.1,0,0.1,0.1 C10,9.7,10,10,9.9,10.3c-0.2,0.8-0.4,1.5-0.6,2.3c-0.2,0.6-0.3,1.1-0.5,1.7c-0.1,0.3-0.2,0.5-0.4,0.6C8,15.1,7.5,15,7.2,14.8 C7.1,14.6,7,14.4,7,14.2c-0.1-0.4-0.2-0.8-0.3-1.2C6.4,12.4,6.3,11.8,6.1,11.1C6.1,11.1,6.1,11.1,6.1,11.1z\"/> <path d=\"M19,13.5c-0.6,0-1.2,0-1.8,0c-0.1,0-0.3,0-0.4,0c-0.4-0.1-0.6-0.3-0.7-0.7c0-0.1,0-0.3,0-0.4c0-0.8,0-1.6,0-2.4 c0-0.1,0-0.2,0-0.3C16.1,9.3,16.3,9,16.6,9c0.1,0,0.2,0,0.2,0c0.2,0,0.3,0,0.5,0c0.1,0,0.1,0,0.1,0.1c0,0.5,0,1,0,1.5 c0,0.2,0,0.4,0,0.6c0,0.2,0.1,0.5,0.2,0.7c0.2,0.4,0.5,0.6,0.9,0.7c0.4,0.1,0.8,0.1,1.2-0.1c0.3-0.1,0.5-0.3,0.6-0.6 c0.1-0.2,0.2-0.5,0.2-0.7c0-0.7,0-1.3,0-2c0-0.1,0-0.1,0.1-0.1c0.2,0,0.4,0,0.5,0c0.1,0,0.2,0,0.3,0c0.2,0.1,0.4,0.2,0.4,0.4 C22,9.5,22,9.6,22,9.7c0,0.9,0,1.8,0,2.7c0,0.2,0,0.4-0.1,0.5c-0.1,0.3-0.3,0.4-0.6,0.5c-0.1,0-0.3,0-0.4,0 C20.2,13.5,19.6,13.5,19,13.5z\"/> <path d=\"M12,13c0,0.6,0,1.2,0,1.8c0,0.1,0,0.1-0.1,0.1c-0.3,0-0.6,0-1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1-0.1c0,0,0,0,0-0.1 c0-1.2,0-2.4,0-3.7c0-0.1,0-0.1,0.1-0.1c0.3,0,0.6,0,1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1C12,11.8,12,12.4,12,13z \"/> <path d=\"M14.5,13c0,0.6,0,1.2,0,1.8c0,0.1,0,0.1-0.1,0.1c-0.3,0-0.6,0-1,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.1-0.1c0,0,0,0,0-0.1 c0-1.2,0-2.4,0-3.6c0-0.1,0-0.1,0.1-0.1c0.3,0,0.6,0,0.9,0c0,0,0,0,0,0c0.1,0,0.1,0,0.1,0.1c0,0.1,0,0.1,0,0.2 C14.5,11.9,14.5,12.5,14.5,13z\"/> <path d=\"M19.8,10.1c0,0.3,0,0.7,0,1c0,0.2-0.1,0.4-0.2,0.5c-0.3,0.4-0.9,0.4-1.2,0c-0.1-0.2-0.2-0.4-0.2-0.6c0-0.7,0-1.3,0-2 c0-0.1,0-0.1,0.1-0.1c0.5,0,0.9,0,1.4,0c0.1,0,0.1,0,0.1,0.1C19.8,9.4,19.8,9.8,19.8,10.1C19.8,10.1,19.8,10.1,19.8,10.1z\"/> <path d=\"M10.7,9.7c0-0.3,0.2-0.6,0.6-0.7c0.3-0.1,0.5,0,0.7,0.2c0.2,0.2,0.2,0.6,0,0.9c-0.2,0.3-0.7,0.4-1.1,0.1 C10.8,10.1,10.7,9.9,10.7,9.7z\"/> <path d=\"M14.6,9.7c0,0.2-0.1,0.5-0.4,0.6c-0.3,0.1-0.6,0.1-0.9-0.1c-0.3-0.3-0.2-0.8,0.1-1.1c0.3-0.2,0.8-0.1,1,0.2 C14.5,9.4,14.6,9.5,14.6,9.7z\"/> </g></g></svg>","platform-wii":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g> <path d=\"M8.5,10.5c0,0.1,0,0.1-0.1,0.2c-0.4,1.5-0.8,3.1-1.3,4.6C7.1,15.5,7,15.7,7,15.8c-0.1,0.3-0.3,0.6-0.6,0.8 c-0.5,0.3-1.2,0.2-1.6-0.2c-0.2-0.2-0.4-0.5-0.5-0.8c-0.3-0.9-0.5-1.8-0.8-2.7C3.1,11.9,2.9,11,2.6,10C2.4,9.3,2.2,8.6,2,7.9 c0,0,0,0,0,0c0-0.1,0-0.1,0.1-0.1c0,0,0,0,0.1,0c0.6,0,1.1,0,1.7,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1 c0.3,1.1,0.5,2.1,0.8,3.2c0.3,1,0.5,2,0.8,3c0,0,0,0.1,0,0.1c0,0,0-0.1,0-0.1c0.1-0.4,0.2-0.9,0.4-1.3c0.4-1.4,0.7-2.7,1.1-4.1 c0.1-0.2,0.1-0.4,0.2-0.6c0.2-0.3,0.5-0.5,0.9-0.5c0.3,0,0.5,0,0.8,0.1c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.1,0.1,0.3,0.2,0.4 c0.2,0.9,0.5,1.8,0.7,2.7c0.2,0.9,0.5,1.8,0.7,2.7c0,0,0,0.1,0,0.1c0,0,0-0.1,0.1-0.1c0.2-0.9,0.5-1.8,0.7-2.7 c0.3-1.2,0.6-2.3,0.9-3.5c0,0,0,0,0-0.1c0-0.1,0-0.1,0.1-0.1c0.2,0,0.4,0,0.5,0c0.4,0,0.8,0,1.2,0c0,0,0,0,0.1,0 c0.1,0,0.1,0,0.1,0.1c-0.1,0.5-0.3,0.9-0.4,1.4c-0.3,1.2-0.7,2.4-1,3.6c-0.3,0.9-0.5,1.8-0.8,2.7c-0.1,0.4-0.3,0.8-0.7,1 c-0.5,0.3-1.3,0.3-1.7-0.2c-0.2-0.2-0.4-0.5-0.4-0.8c-0.2-0.6-0.4-1.3-0.5-2c-0.3-1-0.5-2-0.8-3C8.5,10.6,8.5,10.5,8.5,10.5z\"/> <path d=\"M17.9,13.6c0,1,0,1.9,0,2.9c0,0.2,0,0.2-0.2,0.2c-0.5,0-1,0-1.5,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1 c0-1.9,0-3.9,0-5.8c0-0.2,0-0.2,0.2-0.2c0.5,0,1,0,1.5,0c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.1,0.1c0,0,0,0.1,0,0.1 C17.9,11.7,17.9,12.6,17.9,13.6z\"/> <path d=\"M21.8,13.6c0,1,0,1.9,0,2.9c0,0.2,0,0.2-0.2,0.2c-0.5,0-1,0-1.6,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0-0.1 c0-1.9,0-3.9,0-5.8c0-0.2,0-0.2,0.2-0.2c0.5,0,1,0,1.5,0c0,0,0,0,0,0c0.2,0,0.2,0,0.2,0.2c0,0.1,0,0.2,0,0.3 C21.8,11.8,21.8,12.7,21.8,13.6z\"/> <path d=\"M15.8,8.3c0-0.5,0.4-1,0.9-1.1c0.4-0.1,0.8,0,1.1,0.4c0.4,0.4,0.4,1,0,1.4c-0.4,0.5-1.2,0.6-1.7,0.1 C15.9,8.9,15.8,8.6,15.8,8.3z\"/> <path d=\"M22,8.4c0,0.4-0.2,0.7-0.6,0.9c-0.5,0.2-1,0.1-1.4-0.2c-0.5-0.5-0.4-1.3,0.2-1.7c0.5-0.3,1.2-0.2,1.6,0.3 C21.9,7.9,22,8.1,22,8.4z\"/></g></svg>","platform-xbox":"<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"><g> <path style=\"fill:#404040;\" d=\"M2,11.7c0-0.3,0.1-0.5,0.1-0.8c0.2-2,1-3.8,2.3-5.3C4.5,5.3,4.7,5.2,4.9,5c0.2-0.2,0.4-0.2,0.7-0.2 C6,5,6.5,5.2,6.9,5.5c0.5,0.3,2.1,1.6,2.4,2C9.1,7.7,8.9,8,8.7,8.2c-1.5,1.9-2.8,4-3.9,6.2C4.4,15.2,4.2,16,4,16.8 c-0.1,0.4-0.1,0.8,0,1.2c0,0,0,0,0,0.1C4,18,4,17.9,3.9,17.9c-0.9-1.3-1.5-2.8-1.8-4.4c-0.1-0.4-0.1-0.7-0.1-1.1c0,0,0-0.1,0-0.1 C2,12.1,2,11.9,2,11.7z\"/> <path style=\"fill:#404040;\" d=\"M22,13.1c0,0.3-0.1,0.5-0.1,0.8c-0.3,1.5-0.9,2.8-1.7,4.1c0,0-0.1,0.1-0.1,0.1c0-0.1,0-0.2,0-0.3 c0.1-0.5,0-1.1-0.1-1.6c-0.2-0.9-0.7-1.8-1.1-2.7c-1.1-2.1-2.4-4.1-3.9-5.9c0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0 c0.7-0.7,1.5-1.4,2.3-1.9c0.5-0.3,1-0.6,1.5-0.7c0.2,0,0.3,0,0.4,0.1c0.4,0.4,0.8,0.8,1.1,1.3c0.9,1.2,1.4,2.6,1.7,4.1 c0,0.2,0,0.4,0.1,0.6c0,0.1,0,0.1,0,0.2C22,11.7,22,12.4,22,13.1z\"/> <path style=\"fill:#404040;\" d=\"M12.7,2c0.2,0,0.5,0,0.7,0.1c0.8,0.1,1.5,0.3,2.3,0.6c0.5,0.2,1,0.4,1.5,0.7c0,0-0.1,0-0.1,0 c-1.2-0.1-2.4,0.3-3.5,0.7c-0.5,0.2-1,0.4-1.5,0.7c-0.1,0.1-0.2,0-0.3,0C11,4.4,10.2,4,9.3,3.7C8.7,3.5,8,3.3,7.2,3.4 c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0c0,0,0.1-0.1,0.1-0.1C8.4,2.6,9.8,2.1,11.3,2c0.1,0,0.1,0,0.2,0C11.8,2,12.3,2,12.7,2z\"/> <path style=\"fill:#404040;\" d=\"M11.6,22c-1.4,0-3-0.4-4.4-1.2c-0.5-0.3-1-0.6-1.4-0.9c-0.6-0.4-0.8-1-0.6-1.7 c0.1-0.5,0.4-1.1,0.7-1.5c0.6-1,1.3-2,2.1-2.9c1-1.2,2.1-2.3,3.3-3.3c0.1-0.1,0.3-0.2,0.4-0.3c0.2-0.1,0.2-0.1,0.4,0 c0.3,0.3,0.7,0.6,1,0.9c1.2,1.1,2.3,2.2,3.3,3.4c0.7,0.9,1.4,1.8,1.9,2.9c0.2,0.4,0.3,0.7,0.4,1.1c0.1,0.5-0.1,0.9-0.5,1.2 c-0.6,0.5-1.3,0.9-2,1.3C14.9,21.7,13.4,22,11.6,22z\"/></g></svg>","play-arrow":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"></path></svg>","profile":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3h-4.185c-0.41-1.16-1.51-2-2.815-2s-2.405 0.84-2.815 2h-4.185c-1.105 0-2 0.895-2 2v14c0 1.105 0.895 2 2 2h14c1.105 0 2-0.895 2-2v-14c0-1.105-0.895-2-2-2zM12 3c0.55 0 1 0.445 1 1s-0.45 1-1 1-1-0.445-1-1 0.45-1 1-1zM12 7c1.655 0 3 1.345 3 3 0 1.66-1.345 3-3 3s-3-1.34-3-3c0-1.655 1.345-3 3-3zM18 19h-12v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1.4z\"></path></svg>","remove-circle-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 11v2h10v-2h-10zM12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"></path></svg>","remove-circle":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2c-5.525 0-10 4.475-10 10s4.475 10 10 10 10-4.475 10-10-4.475-10-10-10zM17 13h-10v-2h10v2z\"></path></svg>","remove":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-14v-2h14v2z\"></path></svg>","search":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-0.795l-0.275-0.275c0.98-1.135 1.57-2.61 1.57-4.225 0-3.59-2.91-6.5-6.5-6.5s-6.5 2.91-6.5 6.5 2.91 6.5 6.5 6.5c1.615 0 3.090-0.59 4.225-1.565l0.275 0.275v0.79l5 4.99 1.49-1.49-4.99-5zM9.5 14c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5z\"></path></svg>","server":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 13h-16c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h16c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM7 19c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM20 3h-16c-0.55 0-1 0.45-1 1v6c0 0.55 0.45 1 1 1h16c0.55 0 1-0.45 1-1v-6c0-0.55-0.45-1-1-1zM7 9c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2z\"></path></svg>","settings":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19.43 12.975c0.040-0.32 0.070-0.645 0.070-0.975s-0.030-0.655-0.070-0.975l2.115-1.655c0.19-0.15 0.245-0.42 0.12-0.64l-2-3.465c-0.125-0.215-0.385-0.305-0.61-0.215l-2.49 1.005c-0.515-0.395-1.080-0.73-1.69-0.985l-0.375-2.65c-0.045-0.235-0.25-0.42-0.5-0.42h-4c-0.25 0-0.455 0.185-0.495 0.42l-0.375 2.65c-0.61 0.255-1.175 0.585-1.69 0.985l-2.49-1.005c-0.225-0.085-0.485 0-0.61 0.215l-2 3.465c-0.125 0.215-0.070 0.485 0.12 0.64l2.11 1.655c-0.040 0.32-0.070 0.645-0.070 0.975s0.030 0.655 0.070 0.975l-2.11 1.655c-0.19 0.15-0.245 0.42-0.12 0.64l2 3.465c0.125 0.215 0.385 0.305 0.61 0.215l2.49-1.005c0.515 0.395 1.080 0.73 1.69 0.985l0.375 2.65c0.040 0.235 0.245 0.42 0.495 0.42h4c0.25 0 0.455-0.185 0.495-0.42l0.375-2.65c0.61-0.255 1.175-0.585 1.69-0.985l2.49 1.005c0.225 0.085 0.485 0 0.61-0.215l2-3.465c0.125-0.215 0.070-0.485-0.12-0.64l-2.11-1.655zM12 15.5c-1.935 0-3.5-1.565-3.5-3.5s1.565-3.5 3.5-3.5 3.5 1.565 3.5 3.5-1.565 3.5-3.5 3.5z\"></path></svg>","share":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18 16.078q1.219 0 2.063 0.867t0.844 2.039q0 1.219-0.867 2.086t-2.039 0.867-2.039-0.867-0.867-2.086q0-0.469 0.047-0.656l-7.078-4.125q-0.891 0.797-2.063 0.797-1.219 0-2.109-0.891t-0.891-2.109 0.891-2.109 2.109-0.891q1.172 0 2.063 0.797l7.031-4.078q-0.094-0.469-0.094-0.703 0-1.219 0.891-2.109t2.109-0.891 2.109 0.891 0.891 2.109-0.891 2.109-2.109 0.891q-1.125 0-2.063-0.844l-7.031 4.125q0.094 0.469 0.094 0.703t-0.094 0.703l7.125 4.125q0.844-0.75 1.969-0.75z\"></path></svg>","star-outline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 9.24l-7.19-0.62-2.81-6.62-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030 6.18-3.73 6.18 3.73-1.63-7.030 5.45-4.73zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-0.38 1.7-4.030 1.71 4.040 4.38 0.38-3.32 2.88 1 4.28-3.77-2.28z\"></path></svg>","star":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27l6.18 3.73-1.64-7.030 5.46-4.73-7.19-0.61-2.81-6.63-2.81 6.63-7.19 0.61 5.46 4.73-1.64 7.030z\"></path></svg>","sync":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4v-3l-4 4 4 4v-3c3.315 0 6 2.685 6 6 0 1.015-0.255 1.965-0.695 2.805l1.46 1.46c0.775-1.24 1.235-2.695 1.235-4.265 0-4.42-3.58-8-8-8zM12 18c-3.315 0-6-2.685-6-6 0-1.015 0.255-1.965 0.695-2.805l-1.46-1.46c-0.775 1.24-1.235 2.695-1.235 4.265 0 4.42 3.58 8 8 8v3l4-4-4-4v3z\"></path></svg>","thumb-down":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15 3h-9c-0.83 0-1.54 0.505-1.84 1.22l-3.015 7.050c-0.090 0.23-0.145 0.475-0.145 0.73v1.915l0.010 0.010-0.010 0.075c0 1.105 0.895 2 2 2h6.315l-0.955 4.57c-0.020 0.1-0.035 0.205-0.035 0.315 0 0.415 0.17 0.79 0.44 1.060l1.065 1.055 6.585-6.585c0.36-0.365 0.585-0.865 0.585-1.415v-10c0-1.105-0.895-2-2-2zM19 3v12h4v-12h-4z\"></path></svg>","thumb-up":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 21h4v-12h-4v12zM23 10c0-1.105-0.895-2-2-2h-6.315l0.955-4.57c0.020-0.1 0.035-0.205 0.035-0.315 0-0.415-0.17-0.79-0.44-1.060l-1.065-1.055-6.585 6.585c-0.36 0.365-0.585 0.865-0.585 1.415v10c0 1.105 0.895 2 2 2h9c0.83 0 1.54-0.505 1.84-1.22l3.015-7.050c0.090-0.23 0.145-0.475 0.145-0.73v-1.915l-0.010-0.010 0.010-0.075z\"></path></svg>","view-headline":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 15h17v-2h-17v2zM4 19h17v-2h-17v2zM4 11h17v-2h-17v2zM4 5v2h17v-2h-17z\"></path></svg>","view-list":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 14h4v-4h-4v4zM4 19h4v-4h-4v4zM4 9h4v-4h-4v4zM9 14h12v-4h-12v4zM9 19h12v-4h-12v4zM9 5v4h12v-4h-12z\"></path></svg>","view-module":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4 11h5v-6h-5v6zM4 18h5v-6h-5v6zM10 18h5v-6h-5v6zM16 18h5v-6h-5v6zM10 11h5v-6h-5v6zM16 5v6h5v-6h-5z\"></path></svg>","warning-stop":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.73 3h-7.46l-5.27 5.27v7.455l5.27 5.275h7.455l5.275-5.27v-7.46l-5.27-5.27zM12 17.3c-0.715 0-1.3-0.58-1.3-1.3 0-0.715 0.585-1.3 1.3-1.3s1.3 0.58 1.3 1.3c0 0.72-0.585 1.3-1.3 1.3zM13 13h-2v-6h2v6z\"></path></svg>","warning":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M1 21h22l-11-19-11 19zM13 18h-2v-2h2v2zM13 14h-2v-4h2v4z\"></path></svg>"};

        return {
            getIcon: function getIcon(iconName) {
                return icons[iconName];
            }
        };
    }).directive('icon', ['$compile', 'svgIconProvider', 'svgIconService', function icon($compile, svgIconProvider, svgIconService) {

        var opts = svgIconProvider.getOpts();

        return {
            restrict: 'E',
            compile: compileFn
        };

        function compileFn() {
            return function (scope, iElem, iAttrs) {

                var icon = angular.element(svgIconService.getIcon(iAttrs.icon));

                var cssClasses = [opts.baseClass, opts.baseClass + '-' + iAttrs.icon];
                if (iAttrs['class']) {
                    cssClasses.push(iAttrs['class']);
                }

                icon.addClass(cssClasses.join(' '));

                var e = $compile(icon)(scope);
                iElem.replaceWith(e);
            };
        }
    }]);
})(window, window.angular);