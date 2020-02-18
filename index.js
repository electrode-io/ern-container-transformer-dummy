class DummyTransformer {
  /**
   * Gets the name of the transformer.
   */
  get name() {
      return 'dummy'
  }

  /**
   * Gets the platforms that this transformer supports.
   */
  get platforms() {
    return ['ios', 'android']
  }

  /**
   * Transform a Container using this transformer.
   */
  transform(config) {
    this.logConfig(config)
    return Promise.resolve()
  }

  logConfig(config) {
    console.log(`
==================================================================
I am a dummy transformer, I just log the config I was called with.
By the way ... here it is !
==================================================================
${JSON.stringify(config, null, 2)}`)
  }
}

exports.default = DummyTransformer;
