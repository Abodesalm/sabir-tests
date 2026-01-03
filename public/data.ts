/* let space = 'local';
let API_URL;
if (space === 'local') {
  API_URL = `http://127.0.0.1:8000`;
} else if (space === 'host') {
  API_URL = `https://zed-games-api.onrender.com`;
}

export const api = {
  main: `${API_URL}/api`,
  items: `${API_URL}/api/items`,
  acts: `${API_URL}/api/acts`,
  emps: `${API_URL}/api/emps`,
  currency: `${API_URL}/api/currency`,
  points: `${API_URL}/api/points`,
  custs: `${API_URL}/api/custs`,
  login: `${API_URL}/api/users/login`,
  dash: `${API_URL}/api/dashboard`,
  users: `${API_URL}/api/dashboard/users`,
  codes: `${API_URL}/api/dashboard/codes`,
  tests: `${API_URL}/api/dashboard/tests`,
  bank: `${API_URL}/api/dashboard/bank`,

  main_stats: `${API_URL}/api/dashboard/stats/main`,
  month_stats: `${API_URL}/api/dashboard/stats/month`,
  users_stats: `${API_URL}/api/dashboard/stats/users`,
  codes_stats: `${API_URL}/api/dashboard/stats/codes`,
  tests_stats: `${API_URL}/api/dashboard/stats/tests`,
};
 */

export const quiz = {
  id: 'science_third_grade_full_exam',
  title: 'علوم ثالث متوسط – الدور الأول',
  questions: [
    /* ===================== */
    /* السؤال الأول: اختر الإجابة الصحيحة (1 → 24) */
    /* ===================== */

    {
      id: 1,
      type: 'mcq',
      question: 'أي مما يلي يمثل الخطوة الثانية لحل المشكلات؟',
      options: ['تحديد المشكلة', 'الاستنتاج', 'اختبار الفرضية', 'فرض الفرضية'],
      correctAnswer: 3,
    },
    {
      id: 2,
      type: 'mcq',
      question: 'كل صفة وراثية مسؤول عنها زوج من الجينات يسمى:',
      options: ['مربع بانيت', 'الأيض', 'الإنزيمات', 'الأليل'],
      correctAnswer: 3,
    },
    {
      id: 3,
      type: 'mcq',
      question:
        'عند تحلل عنصر الأميرسيوم بإطلاق جسيمات ألفا يتحول إلى عنصر النبتونيوم، فما عدد نيوتروناته؟',
      options: ['90', '95', '144', '148'],
      correctAnswer: 2,
    },
    {
      id: 4,
      type: 'mcq',
      question: 'أطول الموجات الزلزالية وأقلها سرعة هي:',
      options: [
        'الموجات الأولية',
        'الموجات الثانوية',
        'الموجات الجامعية',
        'الموجات السطحية',
      ],
      correctAnswer: 3,
    },
    {
      id: 5,
      type: 'mcq',
      question: 'موجات زلزالية مائية تكونت بفعل حدوث زلزال تحت المحيط:',
      options: [
        'الموجات الأولية',
        'الموجات الثانوية',
        'الموجات السطحية',
        'التسونامي',
      ],
      correctAnswer: 3,
    },
    {
      id: 6,
      type: 'mcq',
      question: 'كبيرة الحجم وثورانها ضعيف:',
      options: [
        'البراكين المركبة',
        'البراكين العامودية',
        'البراكين الدرعية',
        'البراكين المخروطية',
      ],
      correctAnswer: 2,
    },
    {
      id: 7,
      type: 'mcq',
      question: 'أسفل الستار طبقة لدنة تسمى:',
      options: [
        'الغلاف الصخري',
        'الغلاف القشري',
        'الغلاف المائي',
        'الغلاف المائع',
      ],
      correctAnswer: 3,
    },
    {
      id: 8,
      type: 'mcq',
      question:
        'وظيفته النفاذية الاختيارية ويسمح بدخول بعض المواد ويمنع بعضها:',
      options: ['النواة', 'النوية', 'الغشاء البلازمي', 'السيتوبلازم'],
      correctAnswer: 2,
    },
    {
      id: 9,

      type: 'mcq',
      question: 'ما نوع البحث الذي يجيب عن الأسئلة باختبار الفرضية؟',
      options: [
        'البحث التقني',
        'البحث الوصفي',
        'البحث التحليلي',
        'البحث التجريبي',
      ],
      correctAnswer: 3,
    },
    {
      id: 10,
      type: 'mcq',
      question: 'عندما يتساوى عدد الجزيئات في مادة ما في مكانين يسمى:',
      options: ['أيض', 'تخمر', 'اتزان', 'بلعمة'],
      correctAnswer: 2,
    },
    {
      id: 11,
      type: 'mcq',
      question: 'مخلوقات قادرة على صنع غذائها بنفسها هي:',
      options: ['الإنسان', 'الدجاج', 'النخلة', 'النحلة'],
      correctAnswer: 2,
    },
    {
      id: 12,
      type: 'mcq',
      question:
        'عملية يتم من خلالها الحصول على الطاقة المختزنة دون الحاجة إلى الأكسجين:',
      options: ['البلعمة', 'الإخراج الخلوي', 'التخمر', 'التنفس الخلوي'],
      correctAnswer: 2,
    },
    {
      id: 13,
      type: 'mcq',
      question: 'ما القاعدة النيتروجينية التي توجد في RNA ولا توجد في DNA؟',
      options: ['الأدينين', 'اليوراسيل', 'الجوانين', 'السايتوسين'],
      correctAnswer: 1,
    },
    {
      id: 14,
      type: 'mcq',
      question: 'خلايا الجسم التي لا تنقسم أبداً هي:',
      options: [
        'خلايا الجلد',
        'خلايا الدم البيضاء',
        'الخلايا العصبية',
        'خلايا الشعر',
      ],
      correctAnswer: 2,
    },
    {
      id: 15,
      type: 'mcq',
      question: 'يتكاثر حيوان الهيدرا لاجنسياً عن طريق:',
      options: ['الانشطار', 'التجدد', 'التبرعم', 'الإخصاب'],
      correctAnswer: 2,
    },
    {
      id: 16,
      type: 'mcq',
      question:
        'إذا كان عدد الكتلة لعنصر الفلور 19 وعدد النيترونات 10 فإن العدد الذري يساوي:',
      options: ['8', '9', '29', '19'],
      correctAnswer: 1,
    },
    {
      id: 17,

      type: 'mcq',
      question: 'الطور الذي تنفصل فيه الكروماتيدات في دورة الخلية هو:',
      options: ['البيني', 'التمهيدي', 'الانفصالي', 'النهائي'],
      correctAnswer: 2,
    },
    {
      id: 18,
      type: 'mcq',
      question: 'انحرافات تحدث أحياناً أثناء عملية نسخ DNA تسمى:',
      options: ['الوراثة', 'الطفرة', 'الأحماض الأمينية', 'الكروموسومات'],
      correctAnswer: 1,
    },
    {
      id: 19,
      type: 'mcq',
      question: 'الصفة التي تظهر وتخفي تأثير الصفة الأخرى تسمى:',
      options: ['الطفرة', 'السائدة', 'المتنحية', 'الهجينة'],
      correctAnswer: 1,
    },
    {
      id: 20,
      type: 'mcq',
      question: 'أي الجينات التالية تمثل صفة نقية متنحية؟',
      options: ['Tt', 'TT', 'tt', 'GG'],
      correctAnswer: 2,
    },
    {
      id: 21,
      type: 'mcq',
      question: 'مجموعات العناصر التي عددها من 3 إلى 12 تسمى:',
      options: [
        'العناصر الممثلة',
        'الغازات النبيلة',
        'العناصر الانتقالية',
        'الهالوجينات',
      ],
      correctAnswer: 2,
    },
    {
      id: 22,

      type: 'mcq',
      question: 'عملية ينتج عنها الجلوكوز والأكسجين:',
      options: [
        'الانتشار',
        'الانتشار المدعوم',
        'الخاصية الأسموزية',
        'التنفس الخلوي',
      ],
      correctAnswer: 3,
    },
    {
      id: 23,
      type: 'mcq',
      question: 'العناصر التي تنتمي إلى ثلاثية الحديد هي الحديد والكوبالت و:',
      options: ['النحاس', 'الأمريسيوم', 'النيكل', 'الفسفور'],
      correctAnswer: 2,
    },
    {
      id: 24,
      type: 'mcq',
      question:
        'أي مجموعات العناصر التالية تتحد سريعاً مع العناصر الأخرى لتكون مركبات؟',
      options: [
        'الفلزات القلوية',
        'الفلزات الانتقالية',
        'الغازات النبيلة',
        'ثلاثية الحديد',
      ],
      correctAnswer: 0,
    },

    /* ===================== */
    /* السؤال الثاني: صح / خطأ (25 → 31) */
    /* ===================== */

    {
      id: 25,
      type: 'true_false',
      question:
        'النظائر هي ذرات للعنصر نفسه لها نفس عدد البروتونات وتختلف في عدد النيوترونات.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 26,
      type: 'true_false',
      question: 'النظرية العلمية دائماً تكون صحيحة.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 27,
      type: 'true_false',
      question: 'الانتشار المدعوم عملية تستعمل فيها الخلية الطاقة لنقل المواد.',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    {
      id: 28,
      type: 'true_false',
      question: 'يتكون الجدول الدوري الحديث من سبع دورات و18 مجموعة.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 29,
      type: 'true_false',
      question:
        'عناصر المجموعة الثانية في الجدول الدوري تسمى الفلزات القلوية الأرضية.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 30,
      type: 'true_false',
      question: 'تزاوج TT مع tt ينتج نباتات طويلة فقط (Tt).',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 31,
      type: 'true_false',
      question:
        'يستخدم البورون في صناعة أوعية الطهي التي تنقل مباشرة من الثلاجة إلى الفرن.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 32,
      type: 'true_false',
      question: 'الهالوجينات تعني مكونات الغاز.',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    {
      id: 33,
      type: 'true_false',
      question: 'ميركالي هو الجهاز المستخدم لقياس شدة الزلازل.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 34,
      type: 'true_false',
      question: 'جبل القدر بركان غير مركب.',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    {
      id: 35,
      type: 'true_false',
      question: 'جبل القدر بركان غير مركب.',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    {
      id: 36,
      type: 'true_false',
      question:
        'النيوترون جسيم غير مشحون له كتلة البروتون و يوجد في نواة الذرة.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 37,
      type: 'true_false',
      question: 'التابع هو المتغير الذي لا يمكن قياسه في التجربة.',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
    {
      id: 38,
      type: 'true_false',
      question: 'حرة البرك بركان مخروطي.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 39,
      type: 'true_false',
      question:
        'اللون الأخضر في تجربة الأشعة المهبطية عبارة عن جسيمات سالبة الشحنة.',
      options: ['صح', 'خطأ'],
      correctAnswer: 0,
    },
    {
      id: 40,
      type: 'true_false',
      question: 'الخلايا العصبية خلايا قابلة للانقسام.',
      options: ['صح', 'خطأ'],
      correctAnswer: 1,
    },
  ],
};
