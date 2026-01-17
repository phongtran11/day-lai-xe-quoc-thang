import { notion } from './client';
import { NOTIONS_CONTACT_DB_ID } from '$env/static/private';

export interface ContactSubmission {
	name: string;
	phone: string;
	message: string;
	course: string;
	is_consented: boolean;
	consent_timestamp: string;
}

export const createContactSubmission = async (data: ContactSubmission) => {
	try {
		const response = await notion.pages.create({
			parent: {
				database_id: NOTIONS_CONTACT_DB_ID
			},
			properties: {
				Name: {
					title: [
						{
							text: {
								content: data.name
							}
						}
					]
				},
				Phone: {
					rich_text: [
						{
							text: {
								content: data.phone
							}
						}
					]
				},
				Message: {
					rich_text: [
						{
							text: {
								content: data.message
							}
						}
					]
				},
				Course: {
					rich_text: [
						{
							text: {
								content: data.course
							}
						}
					]
				},
				'Is Consented': {
					checkbox: data.is_consented
				},
				'Consent Timestamp': {
					rich_text: [
						{
							text: {
								content: data.consent_timestamp
							}
						}
					]
				},
				Status: {
					select: {
						name: 'Mới'
					}
				}
			}
		});
		return response;
	} catch (error) {
		console.error('Error creating Notion contact entry:', error);
		throw error;
	}
};
