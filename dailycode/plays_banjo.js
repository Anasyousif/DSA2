function areYouPlayingBanjo(name) {
    const banjo = name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo'
    return name + banjo;
  }