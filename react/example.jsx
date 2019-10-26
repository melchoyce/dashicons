/* eslint-disable no-alert */
/**
 * External dependencies
 */
var React = require( 'react' );

/**
 * Internal dependencies
 */
import Dashicon from './index.js';

module.exports = React.createClass( {
	displayName: 'Dashicons',

	handleClick: function( icon ) {
		var toCopy = '<Dashicon icon="' + icon + '" />';
		window.prompt( 'Copy component code:', toCopy );
	},

	render: function() {
		return (
			<div>
				<Dashicon icon="admin-appearance" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-appearance' ) } />
				<Dashicon icon="admin-collapse" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-collapse' ) } />
				<Dashicon icon="admin-comments" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-comments' ) } />
				<Dashicon icon="admin-customizer" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-customizer' ) } />
				<Dashicon icon="admin-generic" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-generic' ) } />
				<Dashicon icon="admin-home" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-home' ) } />
				<Dashicon icon="admin-links" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-links' ) } />
				<Dashicon icon="admin-media" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-media' ) } />
				<Dashicon icon="admin-multisite" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-multisite' ) } />
				<Dashicon icon="admin-network" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-network' ) } />
				<Dashicon icon="admin-page" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-page' ) } />
				<Dashicon icon="admin-plugins" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-plugins' ) } />
				<Dashicon icon="admin-post" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-post' ) } />
				<Dashicon icon="admin-settings" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-settings' ) } />
				<Dashicon icon="admin-site-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-site-alt' ) } />
				<Dashicon icon="admin-site-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-site-alt2' ) } />
				<Dashicon icon="admin-site-alt3" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-site-alt3' ) } />
				<Dashicon icon="admin-site" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-site' ) } />
				<Dashicon icon="admin-tools" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-tools' ) } />
				<Dashicon icon="admin-users" size={ 40 } onClick={ this.handleClick.bind( this, 'admin-users' ) } />
				<Dashicon icon="album" size={ 40 } onClick={ this.handleClick.bind( this, 'album' ) } />
				<Dashicon icon="align-center" size={ 40 } onClick={ this.handleClick.bind( this, 'align-center' ) } />
				<Dashicon icon="gutenberg/align-full-width" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/align-full-width' ) } />
				<Dashicon icon="align-left" size={ 40 } onClick={ this.handleClick.bind( this, 'align-left' ) } />
				<Dashicon icon="align-none" size={ 40 } onClick={ this.handleClick.bind( this, 'align-none' ) } />
				<Dashicon icon="gutenberg/align-pull-left" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/align-pull-left' ) } />
				<Dashicon icon="gutenberg/align-pull-right" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/align-pull-right' ) } />
				<Dashicon icon="align-right" size={ 40 } onClick={ this.handleClick.bind( this, 'align-right' ) } />
				<Dashicon icon="gutenberg/align-wide" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/align-wide' ) } />
				<Dashicon icon="analytics" size={ 40 } onClick={ this.handleClick.bind( this, 'analytics' ) } />
				<Dashicon icon="archive" size={ 40 } onClick={ this.handleClick.bind( this, 'archive' ) } />
				<Dashicon icon="arrow-down-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-down-alt' ) } />
				<Dashicon icon="arrow-down-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-down-alt2' ) } />
				<Dashicon icon="arrow-down" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-down' ) } />
				<Dashicon icon="arrow-left-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-left-alt' ) } />
				<Dashicon icon="arrow-left-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-left-alt2' ) } />
				<Dashicon icon="arrow-left" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-left' ) } />
				<Dashicon icon="arrow-right-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-right-alt' ) } />
				<Dashicon icon="arrow-right-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-right-alt2' ) } />
				<Dashicon icon="arrow-right" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-right' ) } />
				<Dashicon icon="arrow-up-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-up-alt' ) } />
				<Dashicon icon="arrow-up-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-up-alt2' ) } />
				<Dashicon icon="arrow-up-duplicate" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-up-duplicate' ) } />
				<Dashicon icon="arrow-up" size={ 40 } onClick={ this.handleClick.bind( this, 'arrow-up' ) } />
				<Dashicon icon="art" size={ 40 } onClick={ this.handleClick.bind( this, 'art' ) } />
				<Dashicon icon="awards" size={ 40 } onClick={ this.handleClick.bind( this, 'awards' ) } />
				<Dashicon icon="backup" size={ 40 } onClick={ this.handleClick.bind( this, 'backup' ) } />
				<Dashicon icon="gutenberg/block-default" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/block-default' ) } />
				<Dashicon icon="book-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'book-alt' ) } />
				<Dashicon icon="book" size={ 40 } onClick={ this.handleClick.bind( this, 'book' ) } />
				<Dashicon icon="buddicons-activity" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-activity' ) } />
				<Dashicon icon="buddicons-bbpress-logo" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-bbpress-logo' ) } />
				<Dashicon icon="buddicons-buddypress-logo" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-buddypress-logo' ) } />
				<Dashicon icon="buddicons-community" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-community' ) } />
				<Dashicon icon="buddicons-forums" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-forums' ) } />
				<Dashicon icon="buddicons-friends" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-friends' ) } />
				<Dashicon icon="buddicons-groups" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-groups' ) } />
				<Dashicon icon="buddicons-pm" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-pm' ) } />
				<Dashicon icon="buddicons-replies" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-replies' ) } />
				<Dashicon icon="buddicons-topics" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-topics' ) } />
				<Dashicon icon="buddicons-tracking" size={ 40 } onClick={ this.handleClick.bind( this, 'buddicons-tracking' ) } />
				<Dashicon icon="building" size={ 40 } onClick={ this.handleClick.bind( this, 'building' ) } />
				<Dashicon icon="businessman" size={ 40 } onClick={ this.handleClick.bind( this, 'businessman' ) } />
				<Dashicon icon="businessperson" size={ 40 } onClick={ this.handleClick.bind( this, 'businessperson' ) } />
				<Dashicon icon="businesswoman" size={ 40 } onClick={ this.handleClick.bind( this, 'businesswoman' ) } />
				<Dashicon icon="gutenberg/button" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/button' ) } />
				<Dashicon icon="calendar-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'calendar-alt' ) } />
				<Dashicon icon="calendar" size={ 40 } onClick={ this.handleClick.bind( this, 'calendar' ) } />
				<Dashicon icon="camera-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'camera-alt' ) } />
				<Dashicon icon="camera" size={ 40 } onClick={ this.handleClick.bind( this, 'camera' ) } />
				<Dashicon icon="carrot" size={ 40 } onClick={ this.handleClick.bind( this, 'carrot' ) } />
				<Dashicon icon="cart" size={ 40 } onClick={ this.handleClick.bind( this, 'cart' ) } />
				<Dashicon icon="category" size={ 40 } onClick={ this.handleClick.bind( this, 'category' ) } />
				<Dashicon icon="chart-area" size={ 40 } onClick={ this.handleClick.bind( this, 'chart-area' ) } />
				<Dashicon icon="chart-bar" size={ 40 } onClick={ this.handleClick.bind( this, 'chart-bar' ) } />
				<Dashicon icon="chart-line" size={ 40 } onClick={ this.handleClick.bind( this, 'chart-line' ) } />
				<Dashicon icon="chart-pie" size={ 40 } onClick={ this.handleClick.bind( this, 'chart-pie' ) } />
				<Dashicon icon="clipboard" size={ 40 } onClick={ this.handleClick.bind( this, 'clipboard' ) } />
				<Dashicon icon="clock" size={ 40 } onClick={ this.handleClick.bind( this, 'clock' ) } />
				<Dashicon icon="gutenberg/cloud-saved" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/cloud-saved' ) } />
				<Dashicon icon="gutenberg/cloud-upload" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/cloud-upload' ) } />
				<Dashicon icon="cloud" size={ 40 } onClick={ this.handleClick.bind( this, 'cloud' ) } />
				<Dashicon icon="code-standards" size={ 40 } onClick={ this.handleClick.bind( this, 'code-standards' ) } />
				<Dashicon icon="color-picker" size={ 40 } onClick={ this.handleClick.bind( this, 'color-picker' ) } />
				<Dashicon icon="gutenberg/columns" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/columns' ) } />
				<Dashicon icon="controls-back" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-back' ) } />
				<Dashicon icon="controls-forward" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-forward' ) } />
				<Dashicon icon="controls-pause" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-pause' ) } />
				<Dashicon icon="controls-play" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-play' ) } />
				<Dashicon icon="controls-repeat" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-repeat' ) } />
				<Dashicon icon="controls-skipback" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-skipback' ) } />
				<Dashicon icon="controls-skipforward" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-skipforward' ) } />
				<Dashicon icon="controls-volumeoff" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-volumeoff' ) } />
				<Dashicon icon="controls-volumeon" size={ 40 } onClick={ this.handleClick.bind( this, 'controls-volumeon' ) } />
				<Dashicon icon="gutenberg/cover-image" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/cover-image' ) } />
				<Dashicon icon="dashboard" size={ 40 } onClick={ this.handleClick.bind( this, 'dashboard' ) } />
				<Dashicon icon="desktop" size={ 40 } onClick={ this.handleClick.bind( this, 'desktop' ) } />
				<Dashicon icon="dismiss" size={ 40 } onClick={ this.handleClick.bind( this, 'dismiss' ) } />
				<Dashicon icon="download" size={ 40 } onClick={ this.handleClick.bind( this, 'download' ) } />
				<Dashicon icon="edit-large" size={ 40 } onClick={ this.handleClick.bind( this, 'edit-large' ) } />
				<Dashicon icon="edit" size={ 40 } onClick={ this.handleClick.bind( this, 'edit' ) } />
				<Dashicon icon="editor-aligncenter" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-aligncenter' ) } />
				<Dashicon icon="editor-alignleft" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-alignleft' ) } />
				<Dashicon icon="editor-alignright" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-alignright' ) } />
				<Dashicon icon="editor-bold" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-bold' ) } />
				<Dashicon icon="editor-break" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-break' ) } />
				<Dashicon icon="editor-code-duplicate" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-code-duplicate' ) } />
				<Dashicon icon="editor-code" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-code' ) } />
				<Dashicon icon="editor-contract" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-contract' ) } />
				<Dashicon icon="editor-customchar" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-customchar' ) } />
				<Dashicon icon="editor-expand" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-expand' ) } />
				<Dashicon icon="editor-help" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-help' ) } />
				<Dashicon icon="editor-indent" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-indent' ) } />
				<Dashicon icon="editor-insertmore" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-insertmore' ) } />
				<Dashicon icon="editor-italic" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-italic' ) } />
				<Dashicon icon="editor-justify" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-justify' ) } />
				<Dashicon icon="editor-kitchensink" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-kitchensink' ) } />
				<Dashicon icon="editor-ltr" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-ltr' ) } />
				<Dashicon icon="editor-ol-rtl" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-ol-rtl' ) } />
				<Dashicon icon="editor-ol" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-ol' ) } />
				<Dashicon icon="editor-outdent" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-outdent' ) } />
				<Dashicon icon="editor-paragraph" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-paragraph' ) } />
				<Dashicon icon="editor-paste-text" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-paste-text' ) } />
				<Dashicon icon="editor-paste-word" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-paste-word' ) } />
				<Dashicon icon="editor-quote" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-quote' ) } />
				<Dashicon icon="editor-removeformatting" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-removeformatting' ) } />
				<Dashicon icon="editor-rtl" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-rtl' ) } />
				<Dashicon icon="editor-spellcheck" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-spellcheck' ) } />
				<Dashicon icon="editor-strikethrough" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-strikethrough' ) } />
				<Dashicon icon="editor-table" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-table' ) } />
				<Dashicon icon="editor-textcolor" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-textcolor' ) } />
				<Dashicon icon="editor-ul" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-ul' ) } />
				<Dashicon icon="editor-underline" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-underline' ) } />
				<Dashicon icon="editor-unlink" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-unlink' ) } />
				<Dashicon icon="editor-video" size={ 40 } onClick={ this.handleClick.bind( this, 'editor-video' ) } />
				<Dashicon icon="gutenberg/ellipsis" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/ellipsis' ) } />
				<Dashicon icon="email-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'email-alt' ) } />
				<Dashicon icon="email-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'email-alt2' ) } />
				<Dashicon icon="email" size={ 40 } onClick={ this.handleClick.bind( this, 'email' ) } />
				<Dashicon icon="gutenberg/embed-audio" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/embed-audio' ) } />
				<Dashicon icon="gutenberg/embed-generic" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/embed-generic' ) } />
				<Dashicon icon="gutenberg/embed-photo" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/embed-photo' ) } />
				<Dashicon icon="gutenberg/embed-post" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/embed-post' ) } />
				<Dashicon icon="gutenberg/embed-video" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/embed-video' ) } />
				<Dashicon icon="excerpt-view" size={ 40 } onClick={ this.handleClick.bind( this, 'excerpt-view' ) } />
				<Dashicon icon="gutenberg/exit" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/exit' ) } />
				<Dashicon icon="external" size={ 40 } onClick={ this.handleClick.bind( this, 'external' ) } />
				<Dashicon icon="facebook-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'facebook-alt' ) } />
				<Dashicon icon="facebook" size={ 40 } onClick={ this.handleClick.bind( this, 'facebook' ) } />
				<Dashicon icon="feedback" size={ 40 } onClick={ this.handleClick.bind( this, 'feedback' ) } />
				<Dashicon icon="filter" size={ 40 } onClick={ this.handleClick.bind( this, 'filter' ) } />
				<Dashicon icon="flag" size={ 40 } onClick={ this.handleClick.bind( this, 'flag' ) } />
				<Dashicon icon="format-aside" size={ 40 } onClick={ this.handleClick.bind( this, 'format-aside' ) } />
				<Dashicon icon="format-audio" size={ 40 } onClick={ this.handleClick.bind( this, 'format-audio' ) } />
				<Dashicon icon="format-chat" size={ 40 } onClick={ this.handleClick.bind( this, 'format-chat' ) } />
				<Dashicon icon="format-gallery" size={ 40 } onClick={ this.handleClick.bind( this, 'format-gallery' ) } />
				<Dashicon icon="format-image" size={ 40 } onClick={ this.handleClick.bind( this, 'format-image' ) } />
				<Dashicon icon="format-quote" size={ 40 } onClick={ this.handleClick.bind( this, 'format-quote' ) } />
				<Dashicon icon="format-status" size={ 40 } onClick={ this.handleClick.bind( this, 'format-status' ) } />
				<Dashicon icon="format-video" size={ 40 } onClick={ this.handleClick.bind( this, 'format-video' ) } />
				<Dashicon icon="forms" size={ 40 } onClick={ this.handleClick.bind( this, 'forms' ) } />
				<Dashicon icon="googleplus" size={ 40 } onClick={ this.handleClick.bind( this, 'googleplus' ) } />
				<Dashicon icon="grid-view" size={ 40 } onClick={ this.handleClick.bind( this, 'grid-view' ) } />
				<Dashicon icon="groups" size={ 40 } onClick={ this.handleClick.bind( this, 'groups' ) } />
				<Dashicon icon="hammer" size={ 40 } onClick={ this.handleClick.bind( this, 'hammer' ) } />
				<Dashicon icon="gutenberg/heading" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/heading' ) } />
				<Dashicon icon="heart" size={ 40 } onClick={ this.handleClick.bind( this, 'heart' ) } />
				<Dashicon icon="hidden" size={ 40 } onClick={ this.handleClick.bind( this, 'hidden' ) } />
				<Dashicon icon="gutenberg/html" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/html' ) } />
				<Dashicon icon="id-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'id-alt' ) } />
				<Dashicon icon="id" size={ 40 } onClick={ this.handleClick.bind( this, 'id' ) } />
				<Dashicon icon="image-crop" size={ 40 } onClick={ this.handleClick.bind( this, 'image-crop' ) } />
				<Dashicon icon="image-filter" size={ 40 } onClick={ this.handleClick.bind( this, 'image-filter' ) } />
				<Dashicon icon="image-flip-horizontal" size={ 40 } onClick={ this.handleClick.bind( this, 'image-flip-horizontal' ) } />
				<Dashicon icon="image-flip-vertical" size={ 40 } onClick={ this.handleClick.bind( this, 'image-flip-vertical' ) } />
				<Dashicon icon="image-rotate-left" size={ 40 } onClick={ this.handleClick.bind( this, 'image-rotate-left' ) } />
				<Dashicon icon="image-rotate-right" size={ 40 } onClick={ this.handleClick.bind( this, 'image-rotate-right' ) } />
				<Dashicon icon="image-rotate" size={ 40 } onClick={ this.handleClick.bind( this, 'image-rotate' ) } />
				<Dashicon icon="images-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'images-alt' ) } />
				<Dashicon icon="images-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'images-alt2' ) } />
				<Dashicon icon="index-card" size={ 40 } onClick={ this.handleClick.bind( this, 'index-card' ) } />
				<Dashicon icon="gutenberg/info-outline" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/info-outline' ) } />
				<Dashicon icon="info" size={ 40 } onClick={ this.handleClick.bind( this, 'info' ) } />
				<Dashicon icon="gutenberg/insert-after" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/insert-after' ) } />
				<Dashicon icon="gutenberg/insert-before" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/insert-before' ) } />
				<Dashicon icon="gutenberg/insert" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/insert' ) } />
				<Dashicon icon="instagram" size={ 40 } onClick={ this.handleClick.bind( this, 'instagram' ) } />
				<Dashicon icon="laptop" size={ 40 } onClick={ this.handleClick.bind( this, 'laptop' ) } />
				<Dashicon icon="layout" size={ 40 } onClick={ this.handleClick.bind( this, 'layout' ) } />
				<Dashicon icon="leftright" size={ 40 } onClick={ this.handleClick.bind( this, 'leftright' ) } />
				<Dashicon icon="lightbulb" size={ 40 } onClick={ this.handleClick.bind( this, 'lightbulb' ) } />
				<Dashicon icon="list-view" size={ 40 } onClick={ this.handleClick.bind( this, 'list-view' ) } />
				<Dashicon icon="location-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'location-alt' ) } />
				<Dashicon icon="location" size={ 40 } onClick={ this.handleClick.bind( this, 'location' ) } />
				<Dashicon icon="lock-duplicate" size={ 40 } onClick={ this.handleClick.bind( this, 'lock-duplicate' ) } />
				<Dashicon icon="lock" size={ 40 } onClick={ this.handleClick.bind( this, 'lock' ) } />
				<Dashicon icon="marker" size={ 40 } onClick={ this.handleClick.bind( this, 'marker' ) } />
				<Dashicon icon="media-archive" size={ 40 } onClick={ this.handleClick.bind( this, 'media-archive' ) } />
				<Dashicon icon="media-audio" size={ 40 } onClick={ this.handleClick.bind( this, 'media-audio' ) } />
				<Dashicon icon="media-code" size={ 40 } onClick={ this.handleClick.bind( this, 'media-code' ) } />
				<Dashicon icon="media-default" size={ 40 } onClick={ this.handleClick.bind( this, 'media-default' ) } />
				<Dashicon icon="media-document" size={ 40 } onClick={ this.handleClick.bind( this, 'media-document' ) } />
				<Dashicon icon="media-interactive" size={ 40 } onClick={ this.handleClick.bind( this, 'media-interactive' ) } />
				<Dashicon icon="media-spreadsheet" size={ 40 } onClick={ this.handleClick.bind( this, 'media-spreadsheet' ) } />
				<Dashicon icon="media-text" size={ 40 } onClick={ this.handleClick.bind( this, 'media-text' ) } />
				<Dashicon icon="media-video" size={ 40 } onClick={ this.handleClick.bind( this, 'media-video' ) } />
				<Dashicon icon="megaphone" size={ 40 } onClick={ this.handleClick.bind( this, 'megaphone' ) } />
				<Dashicon icon="menu-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'menu-alt' ) } />
				<Dashicon icon="menu-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'menu-alt2' ) } />
				<Dashicon icon="menu-alt3" size={ 40 } onClick={ this.handleClick.bind( this, 'menu-alt3' ) } />
				<Dashicon icon="menu" size={ 40 } onClick={ this.handleClick.bind( this, 'menu' ) } />
				<Dashicon icon="microphone" size={ 40 } onClick={ this.handleClick.bind( this, 'microphone' ) } />
				<Dashicon icon="migrate" size={ 40 } onClick={ this.handleClick.bind( this, 'migrate' ) } />
				<Dashicon icon="minus" size={ 40 } onClick={ this.handleClick.bind( this, 'minus' ) } />
				<Dashicon icon="money" size={ 40 } onClick={ this.handleClick.bind( this, 'money' ) } />
				<Dashicon icon="move" size={ 40 } onClick={ this.handleClick.bind( this, 'move' ) } />
				<Dashicon icon="nametag" size={ 40 } onClick={ this.handleClick.bind( this, 'nametag' ) } />
				<Dashicon icon="networking" size={ 40 } onClick={ this.handleClick.bind( this, 'networking' ) } />
				<Dashicon icon="no-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'no-alt' ) } />
				<Dashicon icon="no" size={ 40 } onClick={ this.handleClick.bind( this, 'no' ) } />
				<Dashicon icon="palmtree" size={ 40 } onClick={ this.handleClick.bind( this, 'palmtree' ) } />
				<Dashicon icon="paperclip" size={ 40 } onClick={ this.handleClick.bind( this, 'paperclip' ) } />
				<Dashicon icon="performance" size={ 40 } onClick={ this.handleClick.bind( this, 'performance' ) } />
				<Dashicon icon="phone" size={ 40 } onClick={ this.handleClick.bind( this, 'phone' ) } />
				<Dashicon icon="pinterest" size={ 40 } onClick={ this.handleClick.bind( this, 'pinterest' ) } />
				<Dashicon icon="pinterest2" size={ 40 } onClick={ this.handleClick.bind( this, 'pinterest2' ) } />
				<Dashicon icon="playlist-audio" size={ 40 } onClick={ this.handleClick.bind( this, 'playlist-audio' ) } />
				<Dashicon icon="playlist-video" size={ 40 } onClick={ this.handleClick.bind( this, 'playlist-video' ) } />
				<Dashicon icon="plugins-checked" size={ 40 } onClick={ this.handleClick.bind( this, 'plugins-checked' ) } />
				<Dashicon icon="plus-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'plus-alt' ) } />
				<Dashicon icon="plus-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'plus-alt2' ) } />
				<Dashicon icon="plus" size={ 40 } onClick={ this.handleClick.bind( this, 'plus' ) } />
				<Dashicon icon="portfolio" size={ 40 } onClick={ this.handleClick.bind( this, 'portfolio' ) } />
				<Dashicon icon="post-status" size={ 40 } onClick={ this.handleClick.bind( this, 'post-status' ) } />
				<Dashicon icon="pressthis" size={ 40 } onClick={ this.handleClick.bind( this, 'pressthis' ) } />
				<Dashicon icon="products" size={ 40 } onClick={ this.handleClick.bind( this, 'products' ) } />
				<Dashicon icon="randomize" size={ 40 } onClick={ this.handleClick.bind( this, 'randomize' ) } />
				<Dashicon icon="redo" size={ 40 } onClick={ this.handleClick.bind( this, 'redo' ) } />
				<Dashicon icon="gutenberg/remove" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/remove' ) } />
				<Dashicon icon="rest-api" size={ 40 } onClick={ this.handleClick.bind( this, 'rest-api' ) } />
				<Dashicon icon="rss" size={ 40 } onClick={ this.handleClick.bind( this, 'rss' ) } />
				<Dashicon icon="gutenberg/saved" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/saved' ) } />
				<Dashicon icon="schedule" size={ 40 } onClick={ this.handleClick.bind( this, 'schedule' ) } />
				<Dashicon icon="screenoptions" size={ 40 } onClick={ this.handleClick.bind( this, 'screenoptions' ) } />
				<Dashicon icon="search" size={ 40 } onClick={ this.handleClick.bind( this, 'search' ) } />
				<Dashicon icon="share-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'share-alt' ) } />
				<Dashicon icon="share-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'share-alt2' ) } />
				<Dashicon icon="share" size={ 40 } onClick={ this.handleClick.bind( this, 'share' ) } />
				<Dashicon icon="shield-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'shield-alt' ) } />
				<Dashicon icon="shield" size={ 40 } onClick={ this.handleClick.bind( this, 'shield' ) } />
				<Dashicon icon="gutenberg/shortcode" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/shortcode' ) } />
				<Dashicon icon="slides" size={ 40 } onClick={ this.handleClick.bind( this, 'slides' ) } />
				<Dashicon icon="smartphone" size={ 40 } onClick={ this.handleClick.bind( this, 'smartphone' ) } />
				<Dashicon icon="smiley" size={ 40 } onClick={ this.handleClick.bind( this, 'smiley' ) } />
				<Dashicon icon="sort" size={ 40 } onClick={ this.handleClick.bind( this, 'sort' ) } />
				<Dashicon icon="sos" size={ 40 } onClick={ this.handleClick.bind( this, 'sos' ) } />
				<Dashicon icon="star-empty" size={ 40 } onClick={ this.handleClick.bind( this, 'star-empty' ) } />
				<Dashicon icon="star-filled" size={ 40 } onClick={ this.handleClick.bind( this, 'star-filled' ) } />
				<Dashicon icon="star-half" size={ 40 } onClick={ this.handleClick.bind( this, 'star-half' ) } />
				<Dashicon icon="sticky" size={ 40 } onClick={ this.handleClick.bind( this, 'sticky' ) } />
				<Dashicon icon="store" size={ 40 } onClick={ this.handleClick.bind( this, 'store' ) } />
				<Dashicon icon="gutenberg/table-col-after" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/table-col-after' ) } />
				<Dashicon icon="gutenberg/table-col-before" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/table-col-before' ) } />
				<Dashicon icon="gutenberg/table-col-delete" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/table-col-delete' ) } />
				<Dashicon icon="gutenberg/table-row-after" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/table-row-after' ) } />
				<Dashicon icon="gutenberg/table-row-before" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/table-row-before' ) } />
				<Dashicon icon="gutenberg/table-row-delete" size={ 40 } onClick={ this.handleClick.bind( this, 'gutenberg/table-row-delete' ) } />
				<Dashicon icon="tablet" size={ 40 } onClick={ this.handleClick.bind( this, 'tablet' ) } />
				<Dashicon icon="tag" size={ 40 } onClick={ this.handleClick.bind( this, 'tag' ) } />
				<Dashicon icon="tagcloud" size={ 40 } onClick={ this.handleClick.bind( this, 'tagcloud' ) } />
				<Dashicon icon="testimonial" size={ 40 } onClick={ this.handleClick.bind( this, 'testimonial' ) } />
				<Dashicon icon="text-page" size={ 40 } onClick={ this.handleClick.bind( this, 'text-page' ) } />
				<Dashicon icon="text" size={ 40 } onClick={ this.handleClick.bind( this, 'text' ) } />
				<Dashicon icon="thumbs-down" size={ 40 } onClick={ this.handleClick.bind( this, 'thumbs-down' ) } />
				<Dashicon icon="thumbs-up" size={ 40 } onClick={ this.handleClick.bind( this, 'thumbs-up' ) } />
				<Dashicon icon="tickets-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'tickets-alt' ) } />
				<Dashicon icon="tickets" size={ 40 } onClick={ this.handleClick.bind( this, 'tickets' ) } />
				<Dashicon icon="tide" size={ 40 } onClick={ this.handleClick.bind( this, 'tide' ) } />
				<Dashicon icon="translation" size={ 40 } onClick={ this.handleClick.bind( this, 'translation' ) } />
				<Dashicon icon="trash" size={ 40 } onClick={ this.handleClick.bind( this, 'trash' ) } />
				<Dashicon icon="twitter-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'twitter-alt' ) } />
				<Dashicon icon="twitter" size={ 40 } onClick={ this.handleClick.bind( this, 'twitter' ) } />
				<Dashicon icon="undo" size={ 40 } onClick={ this.handleClick.bind( this, 'undo' ) } />
				<Dashicon icon="universal-access-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'universal-access-alt' ) } />
				<Dashicon icon="universal-access" size={ 40 } onClick={ this.handleClick.bind( this, 'universal-access' ) } />
				<Dashicon icon="unlock" size={ 40 } onClick={ this.handleClick.bind( this, 'unlock' ) } />
				<Dashicon icon="update-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'update-alt' ) } />
				<Dashicon icon="update" size={ 40 } onClick={ this.handleClick.bind( this, 'update' ) } />
				<Dashicon icon="upload" size={ 40 } onClick={ this.handleClick.bind( this, 'upload' ) } />
				<Dashicon icon="vault" size={ 40 } onClick={ this.handleClick.bind( this, 'vault' ) } />
				<Dashicon icon="video-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'video-alt' ) } />
				<Dashicon icon="video-alt2" size={ 40 } onClick={ this.handleClick.bind( this, 'video-alt2' ) } />
				<Dashicon icon="video-alt3" size={ 40 } onClick={ this.handleClick.bind( this, 'video-alt3' ) } />
				<Dashicon icon="visibility" size={ 40 } onClick={ this.handleClick.bind( this, 'visibility' ) } />
				<Dashicon icon="warning" size={ 40 } onClick={ this.handleClick.bind( this, 'warning' ) } />
				<Dashicon icon="welcome-add-page" size={ 40 } onClick={ this.handleClick.bind( this, 'welcome-add-page' ) } />
				<Dashicon icon="welcome-comments" size={ 40 } onClick={ this.handleClick.bind( this, 'welcome-comments' ) } />
				<Dashicon icon="welcome-learn-more" size={ 40 } onClick={ this.handleClick.bind( this, 'welcome-learn-more' ) } />
				<Dashicon icon="welcome-view-site" size={ 40 } onClick={ this.handleClick.bind( this, 'welcome-view-site' ) } />
				<Dashicon icon="welcome-widgets-menus" size={ 40 } onClick={ this.handleClick.bind( this, 'welcome-widgets-menus' ) } />
				<Dashicon icon="welcome-write-blog" size={ 40 } onClick={ this.handleClick.bind( this, 'welcome-write-blog' ) } />
				<Dashicon icon="wordpress-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'wordpress-alt' ) } />
				<Dashicon icon="wordpress" size={ 40 } onClick={ this.handleClick.bind( this, 'wordpress' ) } />
				<Dashicon icon="yes-alt" size={ 40 } onClick={ this.handleClick.bind( this, 'yes-alt' ) } />
				<Dashicon icon="yes" size={ 40 } onClick={ this.handleClick.bind( this, 'yes' ) } />
			</div>
		);
	}
} );
