(function () {

  'use strict'

  var n;

  $(document).ready(function () {

    n.toggle.listeners();
    n.hover.listeners();

    $('.form .form__input.form__input--select').simpleselect();

    $('.form.form--plusone .form__input.form__input--select[name=submitter_name]').on('change', function() {
      var submitter_name = $(this).val();
      var submitter_email = $('option:selected', this).data('email');
      $('.form.form--plusone .form__input[name=submitter_email]').val(submitter_email);
    });

    $('.form.form--plusone .form__input.form__input--select[name=submittee_name]').on('change', function() {
      var submittee_name = $(this).val();
      var submittee_email = $('option:selected', this).data('email');
      $('.form.form--plusone .form__submit').text("Give " + submittee_name + " +1!");
      $('.form.form--plusone .form__input[name=submittee_email]').val(submittee_email);
    });

    $('.form.form--plusone .form__form').submit(function(e) {
      var submitter_name = $('.form.form--plusone .form__input[name=submitter_name]').val();
      var submittee_name = $('.form.form--plusone .form__input[name=submittee_name]').val();
      var reason = $('.form.form--plusone .form__input[name=reason]').val();
      var explanation = $('.form.form--plusone .form__input[name=explanation]').val();
      if (submitter_name === "" || submittee_name === "" || reason === "" || explanation === "") {
        e.preventDefault();
        alert("You've gotta complete the form yo...");
      }
    });

  }),

  n = {

    hover: {
      listeners: function() {
        // $('.hover').hover(n.Hover.hover_component);
      },

      hover_component: function(e) {
      }
    },

    toggle: {

      listeners: function() {
        $(".toggle").on("click", n.toggle.toggle_states);
      },

      toggle_states: function(e) {
        var activate = $(this).data("activate").split(" ");
        var deactivate = $(this).data("deactivate").split(" ");

        // Toggle Activated States
        for (var i=0, l=activate.length; i<l; i++) {

          var toggle = $(".toggle.toggle--" + activate[i]);
          var state = activate[i];

          if ($(".page.active--" + activate[i]).length) {
            deactivateAriaPressed( toggle );
            deactivatePageState( state );
          }
          else {
            activateAriaPressed( toggle );
            activatePageState( state );
          }
        }

        // Toggle Deactivated States
        for (var i=0, l=deactivate.length; i<l; i++) {

          var toggle = $(".toggle.toggle--" + deactivate[i]);
          var state = deactivate[i];
          
          deactivateAriaPressed( toggle );
          deactivatePageState( state );
        }

        // Utility Functions
        function activateAriaPressed( toggle ) {
          toggle.attr("aria-pressed", "true");
        }

        function deactivateAriaPressed( toggle ) {
          toggle.attr("aria-pressed", "false");
        }

        function activatePageState( state ) {
          $(".page").addClass("active--" + state);
        }

        function deactivatePageState( state ) {
          $(".page").removeClass("active--" + state);
        }
      }
    }
  }

}());
