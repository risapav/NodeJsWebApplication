/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.app',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Ra) {
        //        
        const Ch = Ra.channel('ChHeader');
        //
        const Ct = require('HEADER/cntrl.js');
        //
        return Mn.AppRouter.extend({
            controller: new Ct,
            routes: {
                'menu': 'showMenu',
                'left': 'showLeft',
                'right': 'showRight'
            },
            showMenu: function(){                     
                Ch.trigger('show:menu');
            },            
            showLeft: function(){                   
                Ch.trigger('show:left');
            },
            showRight: function(){                   
                Ch.trigger('show:right');
            }    
        });
});           