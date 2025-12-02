graph TD
    %% 노드 정의
    App[App]
    QuizPage1[QuizPage1]
    QuizHeader[QuizHeader]
    ImageGrid[ImageGrid Layout]
    ImageCard[ImageCard]
    Img[Image]
    Label[Label]
    FeedbackOverlay[FeedbackOverlay]

    %% 관계 정의
    App -- onComplete --> QuizPage1
    
    QuizPage1 -- props: day, title --> QuizHeader
    QuizPage1 -- state: selection --> ImageGrid
    
    ImageGrid -- map(images) --> ImageCard
    
    ImageCard -- src, alt --> Img
    ImageCard -- id, text --> Label
    ImageCard -- conditional --> FeedbackOverlay

    %% 스타일링 및 상세 설명
    classDef component fill:#fff,stroke:#333,stroke-width:2px;
    classDef logic fill:#f9f9f9,stroke:#666,stroke-dasharray: 5 5;
    classDef conditional fill:#ffe6e6,stroke:#ff9999;

    class App,QuizPage1,QuizHeader component;
    class ImageGrid,ImageCard,Img,Label logic;
    class FeedbackOverlay conditional;

    %% 노드 텍스트 상세
    QuizPage1:::component
    QuizHeader:::component
    FeedbackOverlay["FeedbackOverlay<br/>(O/X 표시)"]:::conditional
    ImageCard["ImageCard<br/>(onClick Event)"]:::logic
