$.index.open();
/*----------Vista----------*/
var Button = require("android.widget.Button"),
    LayoutParams = require('android.widget.FrameLayout.LayoutParams'),
    Activity = require('android.app.Activity'),
    Color = require('android.graphics.Color'),
    TypedValue = require('android.util.TypedValue'),
    Gravity = require('android.view.Gravity'),
    OnClickListener = require('android.view.View.OnClickListener'),
    currentActivity = new Activity(Ti.Android.currentActivity);
    
var button = new Button(currentActivity);

button.setBackgroundColor(Color.BLUE);
button.setText("Ouch!!!");

var width = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 80, currentActivity.getResources().getDisplayMetrics());
var height = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 40, currentActivity.getResources().getDisplayMetrics());
var layoutParams = new LayoutParams(width, height, Gravity.CENTER);
button.setLayoutParams(layoutParams);

button.setOnClickListener(new OnClickListener({
    onClick: function(v) {
        alert("Oooooh!");
    }
}));
$.boton_nativo.add(button);

/*********SNACK************/
(function (container) {
	var Snackbar = require('android.support.design.widget.Snackbar');

	$.button.addEventListener('click', function () {
		var	snack = Snackbar.make(container, "Ahora mira aqui :)", Snackbar.LENGTH_LONG);
		snack.show();
	});

})($.view2);

/*----------Ejemplos----------*/
(function (container) {
    var AndroidAppPkg = require('android.app.*'),
        AlertDialog = AndroidAppPkg.AlertDialog,
        Builder = AlertDialog.Builder,
        Activity = AndroidAppPkg.Activity,
        OnClickListener = require('android.content.DialogInterface.OnClickListener');

    $.ejemploAlert.addEventListener('click', function () {
        var builder = new Builder(new Activity(Titanium.App.Android.getTopActivity()));
        builder.setTitle('Titulo Alert').setMessage('Mensaje de Alert').setCancelable(false); // modal
        builder.setPositiveButton('OK', new OnClickListener({
            onClick: function(d, which) {
				Ti.API.warn(AndroidAppPkg);
            }
        }));
        builder.create().show();
    });
})($.alert_container);

function openWindowBlur(e){
	Alloy.createController('blur');
}
function openWindowAnimate(e){
	Alloy.createController('animate');
}
function openWindowDonut(e){
	Alloy.createController('donutchart');
}
function openWindowDraw(e){
	Alloy.createController('draw');
}
function openWindowProgress(e){
	Alloy.createController('progress');
}
function openWindowLabel(e){
	Alloy.createController('label');
}
function openWindowSnack(e){
	Alloy.createController('snackbar');
}
function openWindowTouches(e){
	Alloy.createController('touches');
}
function newVentana(e){
	Alloy.createController('imagen64');
}



var Button = require("android.widget.Button"),
    LayoutParams = require('android.widget.FrameLayout.LayoutParams'),
    Activity = require('android.app.Activity'),
    Color = require('android.graphics.Color'),
    TypedValue = require('android.util.TypedValue'),
    Gravity = require('android.view.Gravity'),
    OnClickListener = require('android.view.View.OnClickListener'),
    currentActivity = new Activity(Ti.Android.currentActivity);
    
var button = new Button(currentActivity);

button.setBackgroundColor(Color.BLUE);
button.setText("CLICK ME");

var width = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 200, currentActivity.getResources().getDisplayMetrics());
var height = TypedValue.applyDimension(TypedValue.COMPLEX_UNIT_DIP, 50, currentActivity.getResources().getDisplayMetrics());
var layoutParams = new LayoutParams(width, height, Gravity.CENTER);
button.setLayoutParams(layoutParams);

button.setOnClickListener(new OnClickListener({
    onClick: function(v) {
        alert("button pressed!");
    }
}));

$.color4.add(button);
