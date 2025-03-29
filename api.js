const API_BASE_URL = 'https://api.example.com';

async function fetchCourses(category = '', page = 1) {
    try {
        const response = await fetch(`${API_BASE_URL}/courses?category=${category}&page=${page}`);
        if (!response.ok) throw new Error('Failed to fetch courses');
        return await response.json();
    } catch (error) {
        console.error('Fetch courses error:', error);
        throw error;
    }
}

async function fetchCourseDetails(courseId) {
    try {
        const response = await fetch(`${API_BASE_URL}/courses/${courseId}`);
        if (!response.ok) throw new Error('Failed to fetch course details');
        return await response.json();
    } catch (error) {
        console.error('Fetch course details error:', error);
        throw error;
    }
}

async function submitQuiz(quizId, answers) {
    try {
        const response = await fetch(`${API_BASE_URL}/quizzes/${quizId}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answers })
        });
        if (!response.ok) throw new Error('Failed to submit quiz');
        return await response.json();
    } catch (error) {
        console.error('Submit quiz error:', error);
        throw error;
    }
}

async function updateProgress(courseId, lessonId) {
    try {
        const response = await fetch(`${API_BASE_URL}/progress`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ courseId, lessonId })
        });
        if (!response.ok) throw new Error('Failed to update progress');
        return await response.json();
    } catch (error) {
        console.error('Update progress error:', error);
        throw error;
    }
}

async function fetchStudentDashboard() {
    try {
        const response = await fetch(`${API_BASE_URL}/student/dashboard`);
        if (!response.ok) throw new Error('Failed to fetch student dashboard');
        return await response.json();
    } catch (error) {
        console.error('Fetch student dashboard error:', error);
        throw error;
    }
}

async function fetchInstructorDashboard() {
    try {
        const response = await fetch(`${API_BASE_URL}/instructor/dashboard`);
        if (!response.ok) throw new Error('Failed to fetch instructor dashboard');
        return await response.json();
    } catch (error) {
        console.error('Fetch instructor dashboard error:', error);
        throw error;
    }
}

async function createLiveClass(classData) {
    try {
        const response = await fetch(`${API_BASE_URL}/live-classes`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(classData)
        });
        if (!response.ok) throw new Error('Failed to create live class');
        return await response.json();
    } catch (error) {
        console.error('Create live class error:', error);
        throw error;
    }
}

async function postComment(courseId, comment) {
    try {
        const response = await fetch(`${API_BASE_URL}/courses/${courseId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ comment })
        });
        if (!response.ok) throw new Error('Failed to post comment');
        return await response.json();
    } catch (error) {
        console.error('Post comment error:', error);
        throw error;
    }
}
