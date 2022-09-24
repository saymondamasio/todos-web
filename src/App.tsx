import styles from './App.module.css'
import { Header } from './components/Header'

import { FocusEventHandler, useState } from 'react'
import plusIcon from './assets/plus.svg'

export function App(): JSX.Element {
	const [isFocus, setIsFocus] = useState(false)

	const handleInFocus: FocusEventHandler<HTMLInputElement> = e => {
		setIsFocus(true)
	}
	const handleInBlur: FocusEventHandler<HTMLInputElement> = e => {
		setIsFocus(false)
	}

	return (
		<div>
			<Header />

			<main>
				<div className={styles.wrapperContent}>
					<div className={styles.boxAddTask}>
						<div className={styles.wrapperInput}>
							<label htmlFor="task" className={isFocus ? undefined : 'hide'}>
								Descrição da tarefa space&nbsp; |
							</label>
							<input
								id="task"
								type="text"
								placeholder="Adicione uma nova tarefa"
								onFocus={handleInFocus}
								onBlur={handleInBlur}
							/>
						</div>
						<button>
							Criar <img src={plusIcon} alt="Adicionar" />
						</button>
					</div>

					<div className={styles.listTasks}>
						<header className={styles.listTasksHeader}>
							<span>
								Tarefas criadas <div className={styles.badge}>0</div>
							</span>

							<span>
								Concluídas <div className={styles.badge}>0</div>
							</span>
						</header>
						<hr />
					</div>
				</div>
			</main>
		</div>
	)
}
