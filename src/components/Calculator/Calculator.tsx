import React, { useState } from 'react'
import './Calculator.css'

type Operator = '+' | '-' | '*' | '/'

const operatorLabels: Record<Operator, string> = {
  '+': '+',
  '-': '-',
  '*': 'x',
  '/': '/',
}

const formatNumber = (value: number) => {
  if (!Number.isFinite(value)) {
    return 'Error'
  }

  return Number.parseFloat(value.toFixed(10)).toString()
}

const calculate = (
  leftValue: string,
  rightValue: string,
  operator: Operator,
) => {
  const left = Number(leftValue)
  const right = Number(rightValue)

  if (operator === '/' && right === 0) {
    return 'Error'
  }

  switch (operator) {
    case '+':
      return formatNumber(left + right)
    case '-':
      return formatNumber(left - right)
    case '*':
      return formatNumber(left * right)
    case '/':
      return formatNumber(left / right)
    default:
      return 'Error'
  }
}

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [storedValue, setStoredValue] = useState<string | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const clearCalculator = () => {
    setDisplayValue('0')
    setStoredValue(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  const inputDigit = (digit: string) => {
    if (displayValue === 'Error' || waitingForOperand) {
      setDisplayValue(digit)
      setWaitingForOperand(false)
      return
    }

    setDisplayValue(displayValue === '0' ? digit : displayValue + digit)
  }

  const inputDecimal = () => {
    if (displayValue === 'Error' || waitingForOperand) {
      setDisplayValue('0.')
      setWaitingForOperand(false)
      return
    }

    if (!displayValue.includes('.')) {
      setDisplayValue(`${displayValue}.`)
    }
  }

  const deleteDigit = () => {
    if (displayValue === 'Error' || waitingForOperand) {
      setDisplayValue('0')
      setWaitingForOperand(false)
      return
    }

    setDisplayValue(displayValue.length > 1 ? displayValue.slice(0, -1) : '0')
  }

  const chooseOperator = (nextOperator: Operator) => {
    if (displayValue === 'Error') {
      clearCalculator()
      return
    }

    if (operator && storedValue && !waitingForOperand) {
      const result = calculate(storedValue, displayValue, operator)

      setDisplayValue(result)
      setStoredValue(result === 'Error' ? null : result)
      setOperator(result === 'Error' ? null : nextOperator)
      setWaitingForOperand(true)
      return
    }

    setStoredValue(displayValue)
    setOperator(nextOperator)
    setWaitingForOperand(true)
  }

  const completeCalculation = () => {
    if (!operator || !storedValue || waitingForOperand || displayValue === 'Error') {
      return
    }

    const result = calculate(storedValue, displayValue, operator)

    setDisplayValue(result)
    setStoredValue(null)
    setOperator(null)
    setWaitingForOperand(true)
  }

  const operationPreview =
    storedValue && operator
      ? `${storedValue} ${operatorLabels[operator]}${waitingForOperand ? '' : ` ${displayValue}`}`
      : 'Ready'

  return (
    <div className="relative isolate min-h-screen px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <main className="mx-auto page-padding flex max-w-3xl flex-col items-center">
        <h1 className="code-h1 text-xl tracking-tight sm:text-6xl">
          <span className="code animation">Calculator</span>
        </h1>
        <section
          className="calculator-shell mt-10 w-full max-w-sm bg-slate-900/80 p-5 shadow-2xl ring-1 ring-blue-200/20"
          aria-label="Calculator"
        >
          <div className="rounded-md bg-slate-950 px-4 py-5 text-right ring-1 ring-white/10">
            <p
              className="min-h-[1.5rem] text-sm font-semibold text-blue-200"
              aria-live="polite"
            >
              {operationPreview}
            </p>
            <output
              className="calculator-display mt-2 block overflow-hidden text-4xl font-semibold text-gray-100"
              aria-label="Calculator display"
            >
              {displayValue}
            </output>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            <button
              type="button"
              className="calculator-button calculator-button-secondary col-span-2"
              onClick={clearCalculator}
            >
              Clear
            </button>
            <button
              type="button"
              className="calculator-button calculator-button-secondary"
              aria-label="Delete last digit"
              onClick={deleteDigit}
            >
              DEL
            </button>
            <button
              type="button"
              className="calculator-button calculator-button-operator"
              aria-label="Divide"
              onClick={() => chooseOperator('/')}
            >
              /
            </button>

            {['7', '8', '9'].map((digit) => (
              <button
                key={digit}
                type="button"
                className="calculator-button"
                onClick={() => inputDigit(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="calculator-button calculator-button-operator"
              aria-label="Multiply"
              onClick={() => chooseOperator('*')}
            >
              x
            </button>

            {['4', '5', '6'].map((digit) => (
              <button
                key={digit}
                type="button"
                className="calculator-button"
                onClick={() => inputDigit(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="calculator-button calculator-button-operator"
              aria-label="Subtract"
              onClick={() => chooseOperator('-')}
            >
              -
            </button>

            {['1', '2', '3'].map((digit) => (
              <button
                key={digit}
                type="button"
                className="calculator-button"
                onClick={() => inputDigit(digit)}
              >
                {digit}
              </button>
            ))}
            <button
              type="button"
              className="calculator-button calculator-button-operator"
              aria-label="Add"
              onClick={() => chooseOperator('+')}
            >
              +
            </button>

            <button
              type="button"
              className="calculator-button col-span-2"
              onClick={() => inputDigit('0')}
            >
              0
            </button>
            <button
              type="button"
              className="calculator-button"
              aria-label="Decimal point"
              onClick={inputDecimal}
            >
              .
            </button>
            <button
              type="button"
              className="calculator-button calculator-button-equals"
              aria-label="Equals"
              onClick={completeCalculation}
            >
              =
            </button>
          </div>
        </section>
      </main>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}

export default Calculator
