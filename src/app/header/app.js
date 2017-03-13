/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('header.app',['backbone.marionette', 'backbone.radio'], 
    function (Mn, Radio) {
        //
        const Controller = require('HEADER/cntrl.js');
        //
        const Channel = Radio.channel('ChHeader');
        //           
        return Mn.AppRouter.extend({
            controller: new Controller,

            routes: {
                'header:m_0': 'showMenu_0',
                'header:m_1': 'showMenu_1',
                'header:m_2': 'showMenu_2'
            },
            showMenu_0: function(){           
                Channel.trigger('show:m_0');
            },            
            showMenu_1: function(){           
                Channel.trigger('show:m_1');
            },
            showMenu_2: function(){              
                Channel.trigger('show:m_2');
            }    
        });
});           