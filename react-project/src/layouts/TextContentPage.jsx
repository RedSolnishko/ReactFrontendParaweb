import React from "react";

const TextContentPage = () => {
  return (
    <div className="text-content">
      <p>
        Из теории Гераклита, даже если она применима лишь к чувственным объектам,
        вытекает определение знания как восприятия и следует, что знание бывает
        о том, что находится в становлении, а не о том, что есть.
      </p>
      <p>
        Из теории Гераклита, даже если она применима лишь к чувственным объектам,
        вытекает определение знания как восприятия и следует,{" "}
        <a href="">что знание бывает</a> о том, что находится в становлении, а не
        о том, что есть.
      </p>
      <ul>
        <li>
          Нам говорят, что поскольку 6 больше 4, но меньше 12,6 одновременно и
          велико и мало, что является противоречием.
        </li>
        <li>
          Нам говорят, что поскольку 6 больше 4, но меньше 12,6 одновременно и
          велико и мало, что является противоречием.
        </li>
        <li>Но через несколько лет Сократ будет ниже Теэтета.</li>
        <li>
          Из теории Гераклита, даже если она применима лишь к чувственным
          объектам, вытекает определение знания как восприятия и следует, что
          знание бывает о том, что находится в становлении, а не о том, что есть.
        </li>
        <li>
          В этом вопросе имеются некоторые затруднения совершенно элементарного
          характера
          <ul>
            <li>
              Нам говорят, что поскольку 6 больше 4, но меньше 12,6 одновременно и
              велико и мало, что является противоречием.
            </li>
            <li>
              Сократ теперь выше Теэтета, который является не вполне еще выросшим
              юношей;
            </li>
            <li>Но через несколько лет Сократ будет ниже Теэтета.</li>
          </ul>
        </li>
        <li>Поэтому Сократ одновременно и высокого и низкого роста.</li>
      </ul>
      <ol>
        <li>Знание есть восприятие;</li>
        <li>Человек есть мера всех вещей;</li>
        <li>Все находится в состоянии постоянного движения.</li>
      </ol>
      <figure className="table">
        <table>
          <thead>
            <tr>
              <th>Название мероприятия</th>
              <th>Дата</th>
              <th>Время</th>
              <th>Организатор</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                III Международный форум «Математические методы и модели в
                высокотехнологичном производстве»
              </td>
              <td>28 октября</td>
              <td>12:00 - 17:00</td>
              <td>Центр развития профессиональных компетенций ГУАП</td>
            </tr>
            <tr>
              <td>Игра «Квиз» для всех студентов Санкт-Петербурга</td>
              <td>28 октября</td>
              <td>12:00 - 17:00</td>
              <td>Центр развития профессиональных компетенций ГУАП</td>
            </tr>
            <tr>
              <td>
                11-я международная научная конференция «Философия и культура
                информационного общества»
              </td>
              <td>28 октября</td>
              <td>12:00 - 17:00</td>
              <td>Центр развития профессиональных компетенций ГУАП</td>
            </tr>
          </tbody>
        </table>
      </figure>
      <figure className="image">
        <img
          src="https://images.unsplash.com/photo-1741851374430-d242e0dcd70c?q=80&amp;w=3870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Философия"
        />
        <figcaption>
          Подписи выводятся шрифтом уменьшенного кегля. Точка в конце подписи не
          ставится
        </figcaption>
      </figure>
      <h2 className="text-h2">Заголовок второго уровня</h2>
      <h3 className="text-h3">Заголовок третьего уровня</h3>
    </div>
  );
};

export default TextContentPage;
