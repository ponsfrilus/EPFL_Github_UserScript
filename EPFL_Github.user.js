// ==UserScript==
// @name         EPFL Github
// @namespace    EPFL
// @description  A script to add shortcut icon to some valuable repositories on Github
// @include      https://github.com/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @author       ponsfrilus
// @downloadURL  https://raw.githubusercontent.com/ponsfrilus/EPFL_Github_UserScript/master/EPFL_Github.user.js
// @version      0.0.1
// ==/UserScript==
 
// Avoid conflicts
this.$ = this.jQuery = jQuery.noConflict(true);
$(document).ready( function() {
  console.log("... EPFL Github User script loaded ...");
  
  // Insert a link to EPFL STI-IT
  $( '.header-logo-invertocat' ).before( '<a class="header-logo-epfl-sti-it" href="https://github.com/epfl-sti/"><img height="32" width="32" src="https://raw.githubusercontent.com/epfl-sti/sti-it-design/master/r_sti-it.png" /></a>&nbsp;' );
  
  // Insert a link to EPFL-Dojo
  $( '.header-logo-invertocat' ).before( '<a class="header-logo-epfl-dojo" href="https://github.com/epfl-dojo/"><img height="32" width="32" src="https://raw.githubusercontent.com/epfl-dojo/dojo-design/master/dojoman/dojoman_circle.png" /></a>&nbsp;' );
  
  // Insert a link to EPFL's topic
  $( '.header-logo-invertocat' ).before( '<a class="header-epfl-topic" href="https://github.com/topics/epfl"><img height="32" width="32" src="https://raw.githubusercontent.com/ponsfrilus/EPFL_Github_UserScript/master/img/epfl_github.png" /></a>&nbsp;' );
});
