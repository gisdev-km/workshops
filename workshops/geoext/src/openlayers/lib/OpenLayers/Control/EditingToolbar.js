/* Copyright (c) 2006-2011 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the Clear BSD license.  
 * See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */

/**
 * @requires OpenLayers/Control/Panel.js
 * @requires OpenLayers/Control/Navigation.js
 * @requires OpenLayers/Control/DrawFeature.js
 * @requires OpenLayers/Handler/Point.js
 * @requires OpenLayers/Handler/Path.js
 * @requires OpenLayers/Handler/Polygon.js
 */

/**
 * Class: OpenLayers.Control.EditingToolbar 
 * The EditingToolbar is a panel of 4 controls to draw polygons, lines, 
 * points, or to navigate the map by panning. By default it appears in the 
 * upper right corner of the map.
 * 
 * Inherits from:
 *  - <OpenLayers.Control.Panel>
 */
OpenLayers.Control.EditingToolbar = OpenLayers.Class(
  OpenLayers.Control.Panel, {

    /**
     * Constructor: OpenLayers.Control.EditingToolbar
     * Create an editing toolbar for a given layer. 
     *
     * Parameters:
     * layer - {<OpenLayers.Layer.Vector>} 
     * options - {Object} 
     */
    initialize: function(layer, options) {
        OpenLayers.Control.Panel.prototype.initialize.apply(this, [options]);
        
        this.addControls(
          [ new OpenLayers.Control.Navigation() ]
        );  
        var controls = [
          new OpenLayers.Control.DrawFeature(layer, OpenLayers.Handler.Point, {'displayClass': 'olControlDrawFeaturePoint'}),
          new OpenLayers.Control.DrawFeature(layer, OpenLayers.Handler.Path, {'displayClass': 'olControlDrawFeaturePath'}),
          new OpenLayers.Control.DrawFeature(layer, OpenLayers.Handler.Polygon, {'displayClass': 'olControlDrawFeaturePolygon'})
        ];
        this.addControls(controls);
    },

    /**
     * Method: draw
     * calls the default draw, and then activates mouse defaults.
     *
     * Returns:
     * {DOMElement}
     */
    draw: function() {
        var div = OpenLayers.Control.Panel.prototype.draw.apply(this, arguments);
        this.activateControl(this.controls[0]);
        return div;
    },

    CLASS_NAME: "OpenLayers.Control.EditingToolbar"
});    
