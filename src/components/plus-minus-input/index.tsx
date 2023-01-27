import { ReactSVG } from 'react-svg'

import { Container, Button, Input } from './styles'
import minus from '../../assets/icons/minus.svg'
import plus from '../../assets/icons/plus.svg'
import { ChangeEventHandler } from 'react'

type PlusMinusInputProps = {
	decreaseCount: () => void
	increaseCount: () => void
	onChange: ChangeEventHandler<HTMLInputElement>
	count: number | undefined
}

function PlusMinusInput({
	decreaseCount,
	increaseCount,
	onChange,
	count,
}: PlusMinusInputProps) {
	return (
		<Container>
			<Button onClick={decreaseCount}>
				<ReactSVG src={minus} />
			</Button>
			<Input type="number" value={count} onChange={onChange} />
			<Button onClick={increaseCount}>
				<ReactSVG src={plus} />
			</Button>
		</Container>
	)
}

export default PlusMinusInput
