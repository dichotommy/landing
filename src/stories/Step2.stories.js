import React from 'react'
import { Step2 } from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'

export default {
  title: 'Blocks/Step2',
}

export const Default = () => {
  const { steps: stepsProps } = getHomepageData()

  return (
    <Step2
      step2Props={stepsProps[1]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
    />
  )
}

export const OtherColor = () => {
  const { steps: stepsProps } = getHomepageData()

  return (
    <Step2
      step2Props={stepsProps[1]}
      steps={stepsProps.map(step => ({
        preTitle: step.preTitle,
        title: step.title,
      }))}
      color={get('colors.dodgerBlue')}
    />
  )
}
