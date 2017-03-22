/* 
 * Copyright (c) 2010-2016 Pavol Risa
 * All rights reserved
 * 
 * A marionettejs javascript demo application.
 * Works at frontend browser side
 * Compiled under Webpack 2 tools
 */

define('modal.app',['backbone.marionette', 'backbone.radio'], 
function (Mn, Ra) {
    //
    const Ch = Ra.channel('ChModal');
    //     
    const Ct = require('MODAL/cntrl.js');
    //
    return Mn.AppRouter.extend({
        controller: new Ct,

        routes: {
            'modal': 'showModal',
            'modal:close': 'closeModal'
        },
        showModal: function(){           
            Ch.trigger('show:modal');
        },
        closeModal: function(){           
            Ch.trigger('close:modal');
        }            
    });
});   