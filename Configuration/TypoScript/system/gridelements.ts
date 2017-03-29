 tt_content.gridelements_pi1.20.10.setup {
  # Standrad container 
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = |
    innerWrap = <div class="container">|</div>
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end columns
  } # end grid 1 
}

tt_content.gridelements_pi1.20.10.setup {
  # Standrad container 
  2 < lib.gridelements.defaultGridSetup
  2 {
    wrap = <div class="bg-pattern">|</div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end columns
  } # end grid 2
}

tt_content.gridelements_pi1.20.10.setup {
  # Standrad container 
  3 < lib.gridelements.defaultGridSetup
  3 {
    wrap = <div class="links-container">|</div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = |
        innerWrap =  |
      }
    } # end columns
  } # end grid 3
}