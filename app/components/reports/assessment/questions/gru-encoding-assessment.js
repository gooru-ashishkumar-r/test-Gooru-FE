import Ember from 'ember';
import QuestionMixin from 'gooru-web/mixins/reports/assessment/questions/question';

/**
 * SERP Encoding Assessment
 *
 * Component responsible for show the reorder, what option are selected
 * and the correct option.
 *
 * @module
 * @augments ember/Component
 */
export default Ember.Component.extend(QuestionMixin, {
  // -------------------------------------------------------------------------
  // Attributes

  classNames: ['reports', 'assessment', 'questions', 'gru-encoding-assessment'],

  // -------------------------------------------------------------------------
  // Properties

  showCorrect: false,
  /**
   * @property {Boolean} isPause
   */
  isPause: false,
  /*
   * Hold the audio details
   */
  audioRecorder: null,

  answers: Ember.computed(
    'showCorrect',
    'question.answers',
    'answerObj',
    function() {
      return this.get('showCorrect')
        ? this.get('question.answers')
        : this.get('answerObj')
          ? this.get('answerObj')
          : this.get('question.answerObject');
    }
  ),

  //Actions
  actions: {
    //Action triggered when play audio
    onPlayAudio(container, url, index) {
      const component = this;
      let _audio = component.get('audioRecorder');
      if (!_audio || component.get('answerIndex') !== index) {
        _audio = new Audio(url);
        component.set('answerIndex', index);
      }
      component.set('audioRecorder', _audio);
      _audio.play();
      component.set('isPause', true);
      _audio.ontimeupdate = function() {
        component
          .$(
            `.answer-container .${container} .audio-progress .progress-filling`
          )
          .css('width', `${(_audio.currentTime / _audio.duration) * 100}%`);
      };
      _audio.addEventListener('ended', () => {
        component.set('isPause', false);
      });
    },
    //Action triggered when pause audio
    onPauseAudio() {
      const component = this;
      const audio = component.get('audioRecorder');
      audio.pause();
      component.set('isPause', false);
    }
  }
});
